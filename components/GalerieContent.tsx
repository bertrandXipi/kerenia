'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2 } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';
import { GALLERY_CATEGORIES } from '@/lib/data';
import { useLocale } from '@/components/LocaleProvider';

const getThumbSrc = (src: string) => {
  const lastSlash = src.lastIndexOf('/');
  return src.slice(0, lastSlash) + '/thumbs' + src.slice(lastSlash);
};

const loadedFullImages = new Set<string>();

function preloadImage(src: string): Promise<void> {
  if (loadedFullImages.has(src)) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => { loadedFullImages.add(src); resolve(); };
    img.onerror = () => resolve();
    img.src = src;
  });
}

const GalerieContent: React.FC = () => {
  const { t, locale } = useLocale();
  const [filter, setFilter] = useState('__all__');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [fullLoaded, setFullLoaded] = useState(false);

  const translateCategory = (category: string) =>
    GALLERY_CATEGORIES[locale]?.[category] || category;

  const rawCategories = Array.from(new Set(GALLERY_IMAGES.map(img => img.category)));
  const categories = [
    { key: '__all__', label: t.gallery.all },
    ...rawCategories.map(c => ({ key: c, label: translateCategory(c) }))
  ];

  const filteredImages = filter === '__all__'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const navigateImage = useCallback((direction: number) => {
    if (selectedImageIndex === null) return;
    const currentImage = GALLERY_IMAGES[selectedImageIndex];
    const currentIdx = filteredImages.indexOf(currentImage);
    if (currentIdx === -1) return;
    let newIdx = currentIdx + direction;
    if (newIdx >= filteredImages.length) newIdx = 0;
    if (newIdx < 0) newIdx = filteredImages.length - 1;
    const globalIdx = GALLERY_IMAGES.indexOf(filteredImages[newIdx]);
    const src = GALLERY_IMAGES[globalIdx].src;
    if (loadedFullImages.has(src)) {
      setFullLoaded(true);
    } else {
      setFullLoaded(false);
    }
    setSelectedImageIndex(globalIdx);
  }, [selectedImageIndex, filteredImages]);

  // When lightbox opens or navigates: load current + preload neighbors
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const current = GALLERY_IMAGES[selectedImageIndex];
    const idx = filteredImages.indexOf(current);
    if (idx === -1) return;

    // Load current full image
    if (loadedFullImages.has(current.src)) {
      setFullLoaded(true);
    } else {
      setFullLoaded(false);
      preloadImage(current.src).then(() => setFullLoaded(true));
    }

    // Preload 3 images in each direction
    for (let offset = 1; offset <= 3; offset++) {
      const prevIdx = (idx - offset + filteredImages.length) % filteredImages.length;
      const nextIdx = (idx + offset) % filteredImages.length;
      preloadImage(filteredImages[prevIdx].src);
      preloadImage(filteredImages[nextIdx].src);
    }
  }, [selectedImageIndex, filteredImages]);

  // Preload full image on hover in grid
  const handleHover = useCallback((src: string) => {
    preloadImage(src);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'ArrowLeft') navigateImage(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, navigateImage]);

  useEffect(() => {
    document.body.style.overflow = selectedImageIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImageIndex]);

  const openLightbox = (globalIndex: number) => {
    const src = GALLERY_IMAGES[globalIndex].src;
    setFullLoaded(loadedFullImages.has(src));
    setSelectedImageIndex(globalIndex);
  };

  return (
    <div className="pb-20 min-h-screen bg-cream-50 pt-24">
      <div className="bg-cream-100 py-16 mb-12 border-b border-brick-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-condensed text-brick-600 uppercase tracking-widest text-sm font-bold mb-2">{t.gallery.guidedTour}</h3>
          <h1 className="font-script text-5xl md:text-6xl text-brick-600 mb-6">{t.gallery.title}</h1>
          <div className="w-16 h-1 bg-brick-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">{t.gallery.atmosphere}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-6 py-2.5 rounded-full text-sm font-condensed font-bold uppercase tracking-wider transition-all duration-200 border-2 ${
              filter === cat.key
                ? 'bg-brick-600 text-white border-brick-600 shadow-md'
                : 'bg-cream-50 text-slate-500 border-brick-200 hover:border-brick-600 hover:text-brick-600'
            }`}
          >
            {cat.label}
            <span className="ml-2 text-xs opacity-70">
              ({cat.key === '__all__' ? GALLERY_IMAGES.length : GALLERY_IMAGES.filter(i => i.category === cat.key).length})
            </span>
          </button>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(GALLERY_IMAGES.indexOf(image))}
              onMouseEnter={() => handleHover(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getThumbSrc(image.src)}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-brick-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <ZoomIn size={28} className="mb-2" />
                <span className="font-condensed uppercase tracking-widest text-xs font-bold">{translateCategory(image.category)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <X size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/50 rounded-full z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/50 rounded-full z-10"
            aria-label="Image suivante"
          >
            <ChevronRight size={40} />
          </button>
          <div
            className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thumbnail as instant fallback */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getThumbSrc(GALLERY_IMAGES[selectedImageIndex].src)}
              alt=""
              className={`max-w-full max-h-[85vh] object-contain transition-opacity duration-200 ${fullLoaded ? 'opacity-0 absolute' : 'opacity-100'}`}
              style={{ imageRendering: 'auto', filter: 'blur(2px)' }}
            />
            {/* Full resolution image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={selectedImageIndex}
              src={GALLERY_IMAGES[selectedImageIndex].src}
              alt={GALLERY_IMAGES[selectedImageIndex].alt}
              className={`max-w-full max-h-[85vh] object-contain transition-opacity duration-200 ${fullLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
              onLoad={() => setFullLoaded(true)}
            />
            {/* Loading spinner */}
            {!fullLoaded && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Loader2 size={32} className="text-white/50 animate-spin" />
              </div>
            )}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-condensed">
            {filteredImages.indexOf(GALLERY_IMAGES[selectedImageIndex]) + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalerieContent;

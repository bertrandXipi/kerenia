import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['Tous', ...new Set(GALLERY_IMAGES.map(img => img.category))];

  const filteredImages = filter === 'Tous' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;

    if (e.key === 'Escape') setSelectedImageIndex(null);
    if (e.key === 'ArrowRight') navigateImage(1);
    if (e.key === 'ArrowLeft') navigateImage(-1);
  }, [selectedImageIndex, filteredImages]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const navigateImage = (direction: number) => {
    if (selectedImageIndex === null) return;
    
    // Find current image in filtered list to navigate correctly within current view
    // Note: This logic assumes we navigate within filtered results
    const currentImage = GALLERY_IMAGES[selectedImageIndex];
    const currentIndexInFiltered = filteredImages.indexOf(currentImage);
    
    if (currentIndexInFiltered === -1) return; // Should not happen

    let newIndexInFiltered = currentIndexInFiltered + direction;
    if (newIndexInFiltered >= filteredImages.length) newIndexInFiltered = 0;
    if (newIndexInFiltered < 0) newIndexInFiltered = filteredImages.length - 1;

    const newImage = filteredImages[newIndexInFiltered];
    // Find global index of new image
    const newGlobalIndex = GALLERY_IMAGES.indexOf(newImage);
    setSelectedImageIndex(newGlobalIndex);
  };

  return (
    <div className="pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-stone-50 py-16 mb-12 border-b border-stone-200">
        <div className="container mx-auto px-6 text-center">
            <h3 className="font-condensed text-brick-600 uppercase tracking-widest text-sm font-bold mb-2">Visite guidée</h3>
            <h1 className="font-script text-5xl md:text-6xl text-brick-800 mb-6">Galerie Photos</h1>
            <div className="w-16 h-1 bg-brick-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Plongez dans l'atmosphère de Ker Enia. Découvrez nos espaces intérieurs rénovés avec goût et nos extérieurs propices à la détente.
            </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-6 mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-condensed font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
              filter === cat
                ? 'bg-brick-600 text-white border-brick-600 shadow-md'
                : 'bg-white text-slate-500 border-stone-200 hover:border-brick-600 hover:text-brick-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImageIndex(GALLERY_IMAGES.indexOf(image))}
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brick-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <ZoomIn size={32} className="mb-2" />
                  <span className="font-condensed uppercase tracking-widest text-sm font-bold">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/50 rounded-full"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/50 rounded-full"
            >
              <ChevronRight size={40} />
            </button>

            <div 
                className="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[selectedImageIndex].src}
                alt={GALLERY_IMAGES[selectedImageIndex].alt}
                className="max-h-[80vh] w-auto object-contain shadow-2xl rounded-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center"
              >
                  <h3 className="text-white font-condensed text-xl uppercase tracking-wide">
                    {GALLERY_IMAGES[selectedImageIndex].alt}
                  </h3>
                  <p className="text-stone-400 text-sm mt-1">
                    {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
                  </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
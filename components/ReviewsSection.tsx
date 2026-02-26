'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';
import { useLocale } from '@/components/LocaleProvider';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/R%C3%A9sidence+Ker+Enia/@43.3598538,-1.4026367,17z/data=!4m8!3m7!1s0xd511674338e530b:0xd49b2915832a8e1a!8m2!3d43.3598538!4d-1.4000618!9m1!1b1!16s%2Fg%2F11c1p3_8jy';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[400px] bg-cream-50 rounded-2xl p-8 shadow-md border border-cream-300 hover:shadow-xl transition-shadow duration-300 mx-3">
    {/* Header */}
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-brick-100 flex items-center justify-center font-bold text-brick-700 font-condensed text-xl">
          {review.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-sm text-slate-800">{review.author}</h4>
          <span className="text-xs text-slate-400">{review.date}</span>
        </div>
      </div>
      {/* Google icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-label="Google">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    </div>

    {/* Stars */}
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < review.rating ? 'text-amber-400' : 'text-slate-200'}
          fill={i < review.rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>

    {/* Text */}
    <p className="text-slate-600 text-sm leading-relaxed font-light">
      &quot;{review.text}&quot;
    </p>
  </div>
);

const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t, locale } = useLocale();

  // Duplicate reviews for infinite scroll effect
  const allReviews = [...REVIEWS, ...REVIEWS];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5; // px per frame

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += speed;
        // Reset when we've scrolled through the first set
        const halfWidth = container.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const totalReviews = REVIEWS.length;
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

  return (
    <section className="py-20 bg-cream-100 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-script text-5xl md:text-6xl text-brick-600 mb-3">
              {t.home.reviews.whatTheySay}
            </h2>
            <p className="text-slate-500 font-light text-lg">
              {t.home.reviews.verifiedReviews}
            </p>
          </div>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream-50 rounded-2xl px-8 py-6 shadow-lg border border-cream-300 flex items-center gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <svg viewBox="0 0 24 24" className="w-8 h-8" aria-label="Google">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-4xl font-bold text-slate-800">{avgRating}</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-slate-500">{totalReviews} {t.home.reviews.reviews}</span>
            </div>

            <div className="h-14 w-px bg-cream-300" />

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brick-600 hover:text-brick-800 transition-colors font-condensed font-bold text-xs uppercase tracking-wider"
            >
              {t.home.reviews.viewAll}<br />{t.home.reviews.theReviews}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {allReviews.map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brick-600 hover:text-brick-800 transition-colors font-condensed font-bold text-sm uppercase tracking-wider border-b-2 border-brick-300 hover:border-brick-600 pb-1"
        >
          {t.home.reviews.seeAllGoogle}
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;

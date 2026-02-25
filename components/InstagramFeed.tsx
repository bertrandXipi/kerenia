'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useLocale } from '@/components/LocaleProvider';

const INSTAGRAM_URL = 'https://www.instagram.com/kerenia_residence/';

const INSTAGRAM_POSTS = [
  { id: 1, src: 'https://www.kerenia.fr/wp-content/uploads/2020/07/piscine-kerenia.jpg', alt: 'Piscine chauffée Ker Enia' },
  { id: 2, src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg', alt: 'Appartement lumineux' },
  { id: 3, src: 'https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg', alt: 'Villa Arnaga' },
  { id: 4, src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg', alt: 'Salon confort' },
  { id: 5, src: 'https://www.kerenia.fr/wp-content/uploads/2020/07/appartement3-kerenia.jpg', alt: 'Décoration intérieure' },
  { id: 6, src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg', alt: 'Studio cosy' },
  { id: 7, src: 'https://www.kerenia.fr/wp-content/uploads/2020/02/5191788684_a9edc8110e_c.jpg', alt: 'Pas de Roland' },
  { id: 8, src: 'https://www.kerenia.fr/wp-content/uploads/2020/02/2948014906_ca81a12c2d_z.jpg', alt: 'La Rhune' },
];

const PostCard: React.FC<{ post: typeof INSTAGRAM_POSTS[0] }> = ({ post }) => (
  <a
    href={INSTAGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-[250px] md:w-[300px] aspect-square relative group overflow-hidden mx-1"
  >
    <img
      src={post.src}
      alt={post.alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-brick-900/0 group-hover:bg-brick-900/60 transition-all duration-300 flex items-center justify-center">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
        <Instagram size={32} className="mx-auto mb-2" />
        <span className="text-sm font-light">{post.alt}</span>
      </div>
    </div>
  </a>
);

const InstagramFeed: React.FC = () => {
  const { t } = useLocale();
  // Double les posts pour le loop infini
  const allPosts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <section className="py-16 bg-cream-100 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-4 group"
          >
            <Instagram size={28} className="text-brick-600 group-hover:scale-110 transition-transform" />
            <span className="font-condensed font-bold text-sm uppercase tracking-[0.2em] text-brick-600 group-hover:text-brick-800 transition-colors">
              @kerenia_residence
            </span>
          </a>
          <h2 className="font-script text-5xl md:text-6xl text-brick-600 mb-3">
            {t.instagram.title}
          </h2>
          <p className="text-slate-500 font-light text-lg max-w-lg mx-auto">
            {t.instagram.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Marquee CSS */}
      <div className="relative group/marquee">
        <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {allPosts.map((post, i) => (
            <PostCard key={`a-${post.id}-${i}`} post={post} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brick-700 hover:bg-brick-800 text-white px-8 py-4 rounded-full font-condensed font-bold text-xs uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Instagram size={18} />
          {t.instagram.cta}
        </motion.a>
      </div>
    </section>
  );
};

export default InstagramFeed;

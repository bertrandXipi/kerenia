'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import Image from 'next/image';

// Ken Burns Image Effect
interface KenBurnsImageProps {
  src: string;
  alt: string;
  className?: string;
  duration?: number;
  direction?: 'in' | 'out' | 'left' | 'right';
  overlay?: boolean;
  priority?: boolean;
  quality?: number;
}

export const KenBurnsImage: React.FC<KenBurnsImageProps> = ({
  src,
  alt,
  className = '',
  duration = 20,
  direction = 'in',
  overlay = true,
  priority = false,
  quality,
}) => {
  const getAnimation = () => {
    switch (direction) {
      case 'in':
        return { scale: [1, 1.15], x: [0, 0], y: [0, 0] };
      case 'out':
        return { scale: [1.15, 1], x: [0, 0], y: [0, 0] };
      case 'left':
        return { scale: [1.1, 1.1], x: ['5%', '-5%'], y: [0, 0] };
      case 'right':
        return { scale: [1.1, 1.1], x: ['-5%', '5%'], y: [0, 0] };
      default:
        return { scale: [1, 1.15] };
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full"
        animate={getAnimation()}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality || 50}
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1920px"
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      )}
    </div>
  );
};

// Glass Card Component
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

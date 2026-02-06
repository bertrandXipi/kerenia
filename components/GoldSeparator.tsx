'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GoldSeparatorProps {
  className?: string;
  width?: string;
  delay?: number;
}

const GoldSeparator: React.FC<GoldSeparatorProps> = ({ 
  className = '', 
  width = 'w-24',
  delay = 0 
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`h-px ${width} bg-gradient-to-r from-transparent via-gold-500 to-transparent origin-center`}
      />
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-2 h-2 bg-gold-500 rotate-45"
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`h-px ${width} bg-gradient-to-r from-transparent via-gold-500 to-transparent origin-center`}
      />
    </div>
  );
};

export default GoldSeparator;

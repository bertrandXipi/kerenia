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
  width = 'w-24'
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className={`h-px ${width} bg-gradient-to-r from-transparent via-brick-400 to-transparent origin-center`} />
      <div className="w-2 h-2 bg-brick-500 rotate-45" />
      <div className={`h-px ${width} bg-gradient-to-r from-transparent via-brick-400 to-transparent origin-center`} />
    </div>
  );
};

export default GoldSeparator;

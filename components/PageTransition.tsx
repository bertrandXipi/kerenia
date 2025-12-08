import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 
         Removed the white veil overlay to prevent "White Screen of Death" 
         if the animation state gets stuck or interrupted. 
         Keeping a simple fade-in/out for reliability.
      */}
      
      {children}
    </motion.div>
  );
};

export default PageTransition;
'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StripeLayoutProps {
  children: ReactNode;
}

export default function StripeLayout({ children }: StripeLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white">
      <motion.div
        style={{ opacity, scale }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white" />
      </motion.div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 
// app/components/AnimatedWrapper.tsx
"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  animationType?: 'fadeIn' | 'slideUp' | 'scaleIn';
  className?: string;
  duration?: number;
  /**
   * The proportion of the component that needs to be visible to trigger the animation.
   * A value of 0.5 means 50% of the component must be in view.
   * Defaults to 0.5.
   */
  viewportAmount?: number;
}

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.75 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animationType = 'fadeIn',
  className,
  duration,
  viewportAmount = 0.5,
  ...props
}) => {
  const variant = animationVariants[animationType] || animationVariants.fadeIn;

  // Override the default duration if provided
  const transition = {
    ...variant.transition,
    ...(duration ? { duration } : {}),
  };

  return (
    <motion.div
      initial={variant.initial}
      // Animation triggers only when the component is in view
      whileInView={variant.animate}
      transition={transition}
      // Viewport settings: 'once' ensures the animation only runs once,
      // 'amount' sets the threshold for how much should be visible.
      viewport={{ once: true, amount: viewportAmount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;

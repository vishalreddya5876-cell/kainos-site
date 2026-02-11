import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  className = '',
  duration = 1.5
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.19, 1, 0.22, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

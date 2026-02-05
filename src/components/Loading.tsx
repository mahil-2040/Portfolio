import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    // Start exit animation after bars have descended
    const timer = setTimeout(() => {
      setStartExit(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startExit) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [startExit, onComplete]);

  const bars = Array.from({ length: 5 });

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex"
      initial={{ y: 0 }}
      animate={startExit ? { y: '100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {bars.map((_, index) => (
        <motion.div
          key={index}
          className="flex-1 bg-white"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.76, 0, 0.24, 1]
          }}
        />
      ))}
    </motion.div>
  );
}

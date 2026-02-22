import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const name = "JEAN DUPONT";
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), name.length * 100 + 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 bg-mineral-bg flex flex-col items-center justify-center"
    >
      <div className="flex overflow-hidden mb-8">
        {name.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut"
            }}
            className="text-[6vw] md:text-[80px] font-bold text-ink tracking-tighter"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onClick={onComplete}
            className="btn-primary"
          >
            ACCÉDER
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

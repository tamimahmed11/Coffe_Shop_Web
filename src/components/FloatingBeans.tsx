import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

// Simple SVG for a coffee bean
const CoffeeBeanIcon = ({ className, style }: { className?: string, style?: CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 19.93C11 19.93 7.06 16.43 7.06 12C7.06 7.57 11 4.07 11 4.07V19.93ZM13 4.07C13 4.07 16.94 7.57 16.94 12C16.94 16.43 13 19.93 13 19.93V4.07Z" />
  </svg>
);

interface Bean {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export function FloatingBeans() {
  const [beans, setBeans] = useState<Bean[]>([]);

  useEffect(() => {
    // Generate random beans across the screen
    const newBeans = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 20 + 10, // 10px to 30px
      duration: Math.random() * 20 + 15, // 15s to 35s
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
    setBeans(newBeans);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute text-mocha/20"
          initial={{
            x: `${bean.x}vw`,
            y: `${bean.y}vh`,
            rotate: bean.rotation,
            opacity: 0,
          }}
          animate={{
            y: [`${bean.y}vh`, `${bean.y - 20}vh`, `${bean.y}vh`],
            rotate: [bean.rotation, bean.rotation + 180, bean.rotation + 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: bean.duration,
            delay: bean.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <CoffeeBeanIcon style={{ width: bean.size, height: bean.size }} />
        </motion.div>
      ))}
    </div>
  );
}

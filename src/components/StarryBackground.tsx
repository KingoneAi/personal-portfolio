'use client';

import React, { useState, useEffect } from 'react';

interface StarryBackgroundProps {
  numStars?: number;
  isLocal?: boolean;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ numStars = 150, isLocal = false }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const actualNumStars = numStars; // Number of stars
    const newStars: Star[] = [];
    for (let i = 0; i < actualNumStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100, // % of viewport/parent width
        y: Math.random() * 100, // % of viewport/parent height
        size: Math.random() * 2 + 1, // 1px to 3px
        duration: Math.random() * 3 + 1, // 1s to 4s
        delay: Math.random() * 2, // 0s to 2s
      });
    }
    setStars(newStars);
  }, [numStars]);

  return (
    <div className={`inset-0 overflow-hidden pointer-events-none ${isLocal ? 'absolute' : 'fixed -z-10'}`}>
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size * 0.8}em`, // Adjust size for emoji
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >✨</span>
      ))}
    </div>
  );
};

export default StarryBackground;

'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-[9999] rounded-full bg-[#FF6600] pointer-events-none transition-all duration-70 ${
          isPressed ? 'w-8 h-8' : 'w-5 h-5'
        }`}
        style={{
          transform: `translate(${position.x - (isPressed ? 16 : 10)}px, ${position.y - (isPressed ? 16 : 10)}px)`,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function VoaTraineeTextEffect() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Define a rotação com base na posição do mouse
    const rotateX = (y / rect.height) * 45; // inclinação no eixo X
    const rotateY = (-x / rect.width) * 45; // inclinação no eixo Y
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full md:w-[40%] flex justify-center md:justify-end relative my-6 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex items-center justify-center perspective-[1000px]"
      >
        <div
          className="relative w-full h-full transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `
              rotateX(${rotation.x}deg)
              rotateY(${rotation.y}deg)
              scale3d(1.05, 1.05, 1.05)
            `,
          }}
        >
          <Image
            src="/voa_trainee.png"
            alt="Voa Trainee"
            fill
            className="object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from "../logo";
import Cta from "../cta";
import Header from "../header";

export default function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <section
      id="inicio"
      className="w-full bg-[#1426D1] text-white px-6 md:px-12 py-10 rounded-b-4xl min-h-screen overflow-hidden"
    >
      <Header />

      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-32">
        <div className="w-full md:w-[60%] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            A preparação completa para conquistar sua vaga de trainee nos processos mais disputados do país.
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Com o Voa Trainee, você aprende o que realmente faz diferença e ganha segurança pra brilhar em cada etapa do processo.
          </p>

          <div className="flex flex-row items-center md:items-start gap-6">
            <Cta text="Quero ser um mentorado" />

            <div className="flex items-center relative">
              <div className="relative w-12 h-12">
                <Image
                  src="/img/ruan.jpeg"
                  alt="Ruan Remiz"
                  fill
                  className="rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="relative w-12 h-12 -ml-4">
                <Image
                  src="/img/tati.jpeg"
                  alt="Tati Ávila"
                  fill
                  className="rounded-full border-2 border-white object-cover object-top"
                />
              </div>
              <div className="absolute -right-10 -bottom-10 -translate-y-1/2 flex items-center gap-1 text-sm md:text-base font-medium">
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={64}
                  height={64}
                  className="mt-1"
                />
              </div>
            </div>

            <span className="text-xl mt-4">Esses serão seus mentores.</span>
          </div>
        </div>

        {/* === ELEMENTO À DIREITA COM EFEITO === */}
        <div
          className="w-full md:w-[40%] flex justify-center md:justify-end relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full bg-[#0E1EA8] flex items-center justify-center relative overflow-visible">
            {/* Foguete ilustração nova */}
            <div
              className="absolute w-[300px] h-[300px]"
              style={{
                transform: `translate(${offset.x * -1.2}px, ${offset.y * -1.2}px) rotate(${offset.x / 20}deg)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <Image
                src="/rockect-parallax.png"
                alt="Foguete"
                fill
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

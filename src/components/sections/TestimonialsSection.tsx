'use client';

import { useState } from 'react';
import Image from 'next/image';
import Cta from '../cta';

export default function TestimonialsSection() {
  const testimonials = [
    {
      message: `Tati e Ruan, mais uma vez, quero agradecer demais pela oportunidade! Vocês formam uma dupla ótima pois proporcionam feedbacks bem complementares e holísticos sobre as pessoas. 
      Acredito que o diferencial da produção de vocês está na visão do candidato – Ruan junto com a visão da recrutadora.`,
      complement: `Obrigada demais, senti que não sei mais nada sobre mim, consegui ter mais confiança para fazer uma boa entrevista (e bem coerente às ideias). Desejo muito sucesso a vocês, vida voar 🚀`,
      name: 'Luani Viccino',
      role: 'Trainee Alper Seguros',
      avatar: '/logo.png',
    },
    {
      message: `Participar da mentoria da Voa Trainee foi um divisor de águas na minha preparação. 
      Recebi feedbacks construtivos e orientações que me fizeram evoluir rapidamente.`,
      complement: `Agradeço demais pelo apoio, paciência e dedicação de vocês!`,
      name: 'João Martins',
      role: 'Trainee Ambev',
      avatar: '/logo.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const current = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
          Principais depoimentos
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">
          <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-6 text-left text-gray-800 shadow-sm min-h-[280px]">
            <p className="text-sm md:text-base leading-relaxed mb-4 whitespace-pre-line">
              {current.message}
            </p>
            <p className="text-sm md:text-base leading-relaxed">{current.complement}</p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-2">
              <div className="relative w-8 h-8">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="rounded-full object-cover border border-gray-300"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{current.name}</h3>
                <p className="text-sm text-gray-600">{current.role}</p>
              </div>
            </div>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Próximo depoimento"
            className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-700 shadow-sm"
          >
            →
          </button>
        </div>

        <Cta text="Quero viver essa experiência" />
      </div>
    </section>
  );
}

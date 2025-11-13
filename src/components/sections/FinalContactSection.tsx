'use client';

import Image from 'next/image';
import Cta from '../cta';

export default function FinalContactSection() {
  return (
    <section id="contato" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-3xl md:w-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/mentores.jpeg"
              alt="Mentores da Voa Trainee"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed mb-8">
            Com o Voa Trainee, você desenvolve clareza, estratégia e confiança
            para conquistar sua vaga em programas de trainee.
          </p>

          <Cta text="Quero voar com o Voa Trainee" />
        </div>
      </div>
    </section>
  );
}

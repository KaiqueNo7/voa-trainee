'use client';

import Image from 'next/image';

export default function FinalContactSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-56 md:w-96 md:h-64 rounded-2xl overflow-hidden">
            <Image
              src="/mentores.jpg"
              alt="Mentores da Voa Trainee"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
            Com o Voa Trainee, você desenvolve clareza, estratégia e confiança
            para conquistar sua vaga em programas de trainee.
          </p>
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors">
            Quero voar com o Voa Trainee
          </button>
        </div>
      </div>
    </section>
  );
}

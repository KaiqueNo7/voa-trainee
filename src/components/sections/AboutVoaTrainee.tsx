'use client';

import Image from 'next/image';
import Cta from '../cta';

export default function AboutVoaTrainee() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          Um pouco sobre a Voa Trainee
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo sobre a Voa Trainee"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image
                src="/img/ruan.jpeg"
                alt="Ruan Remiz"
                width={80}
                height={80}
                className="rounded-full object-cover border border-gray-200"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Ruan Remiz</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Finalista em 3 Processos Trainee. Trainee formado em uma multinacional de energia. 
                  Entrega de 4+ Projetos estratégicos. Mentor de candidatos há 2 anos. 
                  Traz a visão dos candidatos.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image
                src="/img/tati.jpeg"
                alt="Tati Ávila"
                width={80}
                height={80}
                className="rounded-full object-cover border border-gray-200"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Tati Ávila</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Psicóloga e Consultora de Carreira. Há 20 anos em Recrutamento e Seleção.
                  +30 Programas Trainee e +5000 candidatos avaliados dentro e fora do Brasil.
                  Traz a visão do RH e Gestão.
                </p>
              </div>
            </div>

            <Cta text="Quero decolar" />
          </div>
        </div>
      </div>
    </section>
  );
}

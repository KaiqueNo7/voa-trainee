'use client';

import Image from 'next/image';
import Cta from '../cta';
import Title from '../Title';

export default function AboutVoaTrainee() {
  return (
    <section id="quem-somos" className="w-full py-6 md:py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <Title text="Quem somos" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo sobre a Voa Trainee"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}

          <div className="w-full flex flex-col gap-8 items-center">
            <div className="flex flex-col sm:flex-row items-start justify-center gap-8 w-full">
              <div className="flex flex-col items-center w-full sm:w-1/2">
                <div className="relative w-30 h-30 mb-4">
                  <Image
                    src="/img/ruan.jpeg"
                    alt="Ruan Remiz"
                    fill
                    className="rounded-full object-cover border border-gray-200"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 text-center">Ruan Remiz</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg leading-relaxed text-center mt-2 space-y-2">
                  <li>Trainee formado em uma multinacional de energia.</li>
                  <li>Entrega de 4+ Projetos estratégicos (Brasil, Argentina e EUA)</li>
                  <li>Mentor de candidatos há 2 anos.</li>
                  <li>Traz a visão dos candidatos.</li>
                </ul>
              </div>

              <div className="flex flex-col items-center w-full sm:w-1/2">
                <div className="relative w-30 h-30 mb-4">
                  <Image
                    src="/img/tati.jpeg"
                    alt="Tati Ávila"
                    fill
                    className="rounded-full object-cover object-top border border-gray-200"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 text-center">Tati Ávila</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg leading-relaxed text-center mt-2 space-y-2">
                  <li>Psicóloga e Consultora de Carreira.</li>
                  <li>20 anos em Recrutamento e Seleção.</li>
                  <li>+30 Programas Trainee e +5000 candidatos avaliados.</li>
                  <li>Traz a visão do RH e Gestão.</li>
                </ul>
              </div>
            </div>

            <Cta text="Quero decolar" />
          </div>
        </div>
      </div>
    </section>
  );
}

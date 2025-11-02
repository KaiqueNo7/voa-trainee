'use client';

import Image from 'next/image';
import {
  FaUserCircle,
  FaFileAlt,
  FaBullhorn,
  FaUsers,
  FaClipboardCheck,
  FaComments,
} from 'react-icons/fa';
import Cta from '../cta';

export default function VoaTraineeJourney() {
  const steps = [
    {
      icon: <FaUserCircle className="w-10 h-10 text-blue-500" />,
      title: 'Autoconhecimento',
      text: 'Vamos descobrir seus talentos, competências e interesses para traçar um plano de carreira sólido.',
    },
    {
      icon: <FaFileAlt className="w-10 h-10 text-blue-500" />,
      title: 'CV e LinkedIn',
      text: 'Monte um currículo estratégico e um perfil no LinkedIn que se destacam nos processos seletivos.',
    },
    {
      icon: <FaBullhorn className="w-10 h-10 text-blue-500" />,
      title: 'Pitch',
      text: 'Aprenda a se apresentar com clareza e impacto em entrevistas e dinâmicas.',
    },
    {
      icon: <FaUsers className="w-10 h-10 text-blue-500" />,
      title: 'Dinâmica de grupo',
      text: 'Entenda como aplicar habilidades técnicas e comportamentais em situações práticas.',
    },
    {
      icon: <FaClipboardCheck className="w-10 h-10 text-blue-500" />,
      title: 'Painel com gestores',
      text: 'Ganhe confiança e postura para lidar com entrevistas de alto nível e tomada de decisão.',
    },
    {
      icon: <FaComments className="w-10 h-10 text-blue-500" />,
      title: 'Entrevista final',
      text: 'Fortaleça seu discurso e saiba destacar seus diferenciais para conquistar sua vaga dos sonhos.',
    },
  ];

  return (
    <section id="trajetoria" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-16 text-center">
          Trajetória na Voa Trainee
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-dashed border-blue-400 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center w-full mb-12 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <div
                className={`bg-white border border-gray-200 rounded-xl shadow-md p-6 w-full md:w-[340px] text-center md:text-left z-10 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                }`}
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-blue-500 font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white z-0"></div>
            </div>
          ))}
        </div>

        <Cta text="Quero viver essa experiência" />
      </div>
    </section>
  );
}
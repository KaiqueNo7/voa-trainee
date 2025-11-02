'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaUserCircle,
  FaFileAlt,
  FaBullhorn,
  FaUsers,
  FaClipboardCheck,
  FaComments,
} from 'react-icons/fa';
import Cta from '../cta';

gsap.registerPlugin(ScrollTrigger);

export default function VoaTraineeJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const dot = dotRef.current;

    if (!container || !line || !dot) return;

    const totalHeight = line.scrollHeight - 40; // ajusta o movimento da bolinha

    gsap.set(dot, { yPercent: -50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // bolinha sobe junto com scroll
    tl.fromTo(dot, { y: 0 }, { y: totalHeight, ease: 'none' });

    // linha acende conforme o scroll
    tl.fromTo(
      line,
      { backgroundSize: '100% 0%' },
      {
        backgroundSize: '100% 100%',
        ease: 'none',
      },
      0
    );

    // animação suave dos cards
    gsap.utils.toArray('.card').forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="trajetoria"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto flex flex-col items-center relative"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-16 text-center">
          Trajetória na Voa Trainee
        </h2>

        <div className="relative flex flex-col items-center">
          {/* linha com gradiente e efeito de preenchimento */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 w-[4px] h-full rounded-full z-0"
            style={{
              background:
                'linear-gradient(to bottom, #3B82F6 0%, #1D4ED8 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 0%',
              transition: 'background-size 0.2s ease',
            }}
          />

          {/* bolinha animada */}
          <div
            ref={dotRef}
            className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full shadow-lg border-4 border-white z-10"
          ></div>

          {/* passos */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`card relative flex flex-col md:flex-row items-center w-full mb-12 ${
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
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-0"></div>
            </div>
          ))}
        </div>

        <Cta text="Quero viver essa experiência" />
      </div>
    </section>
  );
}

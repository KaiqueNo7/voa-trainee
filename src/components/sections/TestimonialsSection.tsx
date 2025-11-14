'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import Title from '../Title';
import { FaQuoteRight } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';

type Testimonial = {
  type: 'video' | 'image';
  testemonial?: string;
  image: string;
  video?: string;
  embed?: string;
  name: string;
  role: string;
  avatar: string;
};

export default function TestimonialsSection() {
  let slidesPerView = 3;

  const testimonials: Testimonial[] = [
    {
      type: 'video',
      testemonial:
        'Tati e Ruan, mais uma vez, quero agradecer demais pela oportunidade! Vocês formam uma ótima dupla, pois possuem visões bem complementares e holísticas sobre as pessoas (acredito que o diferencial do produto de vocês é ter a visão do candidato — Ruan — junto com a visão da recrutadora — Tati).',
      image: '/testemonials/01.jpg',
      video: '/testemonials/videos/testimonial1.mp4',
      name: 'Luani',
      role: 'Mentorada',
      avatar: '/testemonials/luani.jpeg',
    },
    {
      type: 'video',
      testemonial:
        'Experiência incrível! Projeto lindo! Amei participar e super recomendo para os futuros trainees! Foi uma mentoria pé no chão e direta ao ponto. Os mentores realmente estão dispostos a fazer o aluno se tornar um trainee!',
      image: '/testemonials/02.jpg',
      video: '/testemonials/videos/testimonial2.mp4',
      name: 'Felipe',
      role: 'Mentorado',
      avatar: '/testemonials/felipe.jpeg',
    },
    {
      type: 'image',
      image: '/testemonials/03.jpg',
      name: 'Mariana',
      role: 'Mentorada',
      testemonial:
        'Obrigada demais! Senti que hoje sei muito mais sobre mim, consigo ter mais confiança para fazer um bom pitch e cadenciar as ideias. Desejo muito sucesso para vocês — vão voar!',
      avatar: '/testemonials/mariana.jpeg',
    },
    {
      type: 'image',
      image: '/testemonials/04.jpg',
      name: 'Amanda',
      role: 'Mentorada',
      testemonial:
        'Gostaria de agradecer aos mentores — Ruan e Tati — pela oportunidade e pela forma como conduziram tudo com tanta leveza, clareza e profundidade. A maneira como guiaram cada etapa fez toda a diferença na experiência e no aprendizado. Obrigada por todo o apoio, escuta e dicas!',
      avatar: '/testemonials/amanda.jpeg',
    },
  ];

  const videoSlides = testimonials.filter((t) => t.type === 'video');
  const imageSlides = testimonials.filter((t) => t.type === 'image');

  return (
    <section
      id="depoimentos"
      className="w-full py-6 md:py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative">
        <Title text="Principais depoimentos" />

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: '.next-btn' }}
          loop={true}
          spaceBetween={30}
          allowTouchMove={true}
          className="overflow-hidden"
          autoHeight={true}
        >
          {videoSlides.map((videoSlide, index) => (
            <SwiperSlide key={`video-${index}`}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative transition-all duration-700 ease-in-out">
                <div className="relative w-full h-full px-4 md:px-12 md:w-1/2">
                  <div className="rounded-2xl shadow-2xl p-6 md:p-8 h-full w-full bg-linear-to-r from-blue-800 to-blue-600 backdrop-blur-sm text-center flex items-center justify-center relative">
                    <h2 className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed max-w-xl relative">
                      <FaQuoteLeft className="text-orange-400 text-2xl absolute -top-4 -left-4 opacity-80" />
                      <span className="block px-8 text-white">{videoSlide.testemonial}</span>
                      <FaQuoteRight className="text-orange-400 text-2xl absolute -bottom-4 -right-4 opacity-80" />
                    </h2>
                  </div>
                </div>

                <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  {videoSlide.video && (
                    <video
                      src={videoSlide.video}
                      controls
                      className="w-full rounded-lg shadow-md mb-4 h-80"
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10">
                      <Image
                        src={videoSlide.avatar}
                        alt={videoSlide.name}
                        fill
                        className="rounded-full object-cover border border-gray-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{videoSlide.name}</h3>
                      <small className="text-gray-600">{videoSlide.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {Array.from({ length: Math.ceil(imageSlides.length / slidesPerView) }).map((_, groupIndex) => (
            <SwiperSlide key={`image-group-${groupIndex}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8">
                {imageSlides
                  .slice(groupIndex * slidesPerView, groupIndex * slidesPerView + slidesPerView)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-around bg-linear-to-r from-blue-800 to-blue-600 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative w-full mb-6">
                        <div className="relative rounded-2xl border border-gray-200 shadow-lg p-8 h-full bg-linear-to-b from-white to-gray-50 text-center flex items-center justify-center">
                          <h2 className="text-md md:text-md font-medium text-gray-800 leading-relaxed relative max-w-lg">
                            <FaQuoteLeft className="text-blue-500 text-3xl absolute -top-6 -left-4 opacity-60" />
                            <span className="block px-8 italic">{item.testemonial}</span>
                            <FaQuoteRight className="text-blue-500 text-3xl absolute -bottom-6 -right-4 opacity-60" />
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="rounded-full object-cover border-2 border-blue-400 shadow-md"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-white text-base">{item.name}</h3>
                          <small className="text-gray-300 text-sm">{item.role}</small>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="next-btn absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-700 shadow-sm transition-all cursor-pointer z-10"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

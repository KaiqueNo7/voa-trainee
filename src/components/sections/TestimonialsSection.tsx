'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import Title from '../Title';

type Testimonial = {
  type: 'video' | 'image' | 'embed';
  image: string;
  video?: string;
  embed?: string;
  name: string;
  role: string;
  avatar: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      type: 'video',
      image: '/testemonials/01.jpeg',
      video: '/testemonials/videos/testimonial1.mp4',
      name: 'Luani Viccino',
      role: 'Trainee Alper Seguros',
      avatar: '/avatar.jpeg',
    },
    {
      type: 'image',
      image: '/testemonials/02.jpeg',
      name: 'João Martins',
      role: 'Trainee Ambev',
      avatar: '/avatar.jpeg',
    },
    {
      type: 'image',
      image: '/testemonials/03.jpeg',
      name: 'Maria Souza',
      role: 'Trainee Itaú',
      avatar: '/avatar.jpeg',
    },
    {
      type: 'image',
      image: '/testemonials/04.jpeg',
      name: 'Pedro Lima',
      role: 'Trainee Santander',
      avatar: '/avatar.jpeg',
    },
  ];

  const videoSlide = testimonials.find((t) => t.type === 'video' || t.type === 'embed');
  const imageSlides = testimonials.filter((t) => t.type === 'image');

  return (
    <section
      id="depoimentos"
      className="w-full py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden"
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
        >
          {videoSlide && (
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative transition-all duration-700 ease-in-out">
                <div className="relative w-full md:w-1/2">
                  {videoSlide.embed && videoSlide.type === 'embed' && (
                    <div
                      className="w-full rounded-lg shadow-md mb-4 overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: videoSlide.embed }}
                    />
                  )}

                  {!videoSlide.embed && videoSlide.type !== 'embed' && (
                    <Image
                      src={videoSlide.image}
                      alt={videoSlide.name}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md object-cover"
                    />
                  )}
                </div>

                <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  {videoSlide.video && videoSlide.type === 'video' && (
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
                      <p className="text-sm text-gray-600">{videoSlide.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}

          {Array.from({ length: Math.ceil(imageSlides.length / 3) }).map((_, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {imageSlides
                  .slice(groupIndex * 3, groupIndex * 3 + 3)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-sm"
                    >
                      <div className="relative w-full h-full aspect-4/3 mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="rounded-full object-cover border border-gray-300"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-600">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="next-btn absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-700 shadow-sm transition-all cursor-pointer"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

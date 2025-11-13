'use client';

import { FaGraduationCap, FaCompass, FaRocket } from 'react-icons/fa';
import Title from "../Title";
import { ReactElement } from "react";

type IconKey = 'graduation-cap' | 'compass' | 'rocket';

export default function MentorshipAudience() {
  const icons: Record<IconKey, ReactElement> = {
    'graduation-cap': <FaGraduationCap className="text-blue-500 text-4xl mb-4" />,
    'compass': <FaCompass className="text-blue-500 text-4xl mb-4" />,
    'rocket': <FaRocket className="text-blue-500 text-4xl mb-4" />,
  };

  const cards: { icon: IconKey; title: string; text: string }[] = [
    {
      icon: 'graduation-cap',
      title: 'Recém-formados',
      text: 'Concluiu a graduação nos últimos 3 anos e quer dar um salto na carreira? Chega de cargos com pouca exposição, como analista ou assistente. O programa de trainee é sua chance de crescer com propósito, visibilidade e investimento real no seu desenvolvimento.',
    },
    {
      icon: 'compass',
      title: 'Estudantes no último ano da graduação',
      text: 'Está prestes a se formar e quer começar no mercado com o pé direito? Com a preparação certa, você pode conquistar sua vaga antes mesmo da colação de grau, garantindo um início de carreira em programas de trainee com crescimento rápido e posições de liderança em pouco tempo.',
    },
    {
      icon: 'rocket',
      title: 'Graduados há mais de 3 anos',
      text: 'Formou-se há mais de 3 anos e sente que ainda não alcançou o lugar que mais se identifica? A mentoria te ajuda a reposicionar sua trajetória e focar em trainees específicos ou vagas estratégicas, transformando sua experiência em diferencial e recolocando sua carreira no rumo certo.',
    },
  ];

  return (
    <section
      id="para-quem-e-a-mentoria"
      className="w-full py-20 px-6 md:px-12 lg:px-24 bg-linear-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Title text="Para quem é essa mentoria?" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {icons[card.icon]}
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

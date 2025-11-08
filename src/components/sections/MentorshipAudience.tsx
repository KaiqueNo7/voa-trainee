'use client';

import Title from "../Title";

export default function MentorshipAudience() {
  const cards = [
    {
      title: 'Universitários e Recém-formados',
      text: 'Para quem está terminando a faculdade ou se formou nos últmos 3 anos e quer entrar no mercado através de programas de trainee. Você vai aprender como se destacar mesmo sem muita experiência profissional.',
    },
    {
      title: 'Jovens em Transição de Carreira',
      text: 'Ideal para quem deseja mudar de área e começar uma nova trajetória em grandes empresas. A mentoria mostra como usar suas experiências anteriores para construir uma narrativa forte e coerente.',
    },
    {
      title: 'Quem Quer Clareza e Direção',
      text: 'Perfeita para quem se sente perdido nas inscrições ou não sabe por onde começar. Você recebe um plano estratégico para escolher os programas certos e se preparar para cada etapa do processo.',
    },
    {
      title: 'Para quem já é experiente com os processos de trainee',
      text: 'Vamos te auxiliar a lapidar sua história para chegar bem preparado nas últimas etapas.',
    },
  ];

  return (
    <section id="para-quem-e-a-mentoria" className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <Title text="Para quem é essa mentoria?" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Title from '../Title';

export default function FaqSection() {
  const faqs = [
    {
      question: 'O quão personalizado é a mentoria?',
      answer:
        'Totalmente personalizada! Antes de começar, fazemos um diagnóstico do seu perfil, objetivos e desafios. A partir disso, montamos um plano individual, com foco no que realmente vai te destacar nos processos seletivos de trainee, desde o autoconhecimento até a entrevista final.',
    },
    {
      question: 'Por quanto tempo fico na mentoria?',
      answer:
        'A mentoria dura em média 6 semanas, com encontros semanais e tarefas práticas entre as sessões. Mas o ritmo é flexível, se você quiser avançar mais rápido ou tiver uma agenda mais corrida, adaptamos conforme sua disponibilidade.',
    },
    {
      question: 'E se eu não tiver tempo para me preparar?',
      answer:
        'A gente entende! Por isso, o método da Voa foi pensado para quem tem rotina cheia. Você recebe materiais objetivos, exercícios práticos e feedbacks diretos, para aproveitar ao máximo mesmo com pouco tempo. O importante é dar o primeiro passo, nós te acompanhamos no resto.',
    },
    {
      question: 'Qual plataforma é utilizada?',
      answer:
        'Usamos o Google Meet para os encontros ao vivo e o um grupo no WhatsApp como hub central da mentoria, lá ficam seus materiais, tarefas e feedbacks organizados em um só lugar.',
    },
    {
      question: 'Existe algum suporte?',
      answer:
        'Sim! Durante toda a mentoria, você tem acesso direto à sua mentora pelo WhatsApp ou e-mail para tirar dúvidas e receber orientações rápidas. Nosso objetivo é estar com você em cada etapa da jornada.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <Title text="Dúvidas frequentes" />

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-gray-800 font-medium hover:bg-gray-200 transition-colors"
              >
                {faq.question}
                <FaChevronDown
                  className={`text-blue-500 transform transition-transform duration-300 cursor-pointer ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-700 text-sm leading-relaxed mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

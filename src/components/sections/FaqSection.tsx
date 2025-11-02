'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FaqSection() {
  const faqs = [
    {
      question: 'O quão personalizado é a mentoria?',
      answer:
        'A mentoria é totalmente personalizada de acordo com seu momento de carreira, perfil e objetivos. Cada participante recebe acompanhamento individual e estratégias específicas.',
    },
    {
      question: 'Por quanto tempo fico na mentoria?',
      answer:
        'A mentoria tem duração média de 8 semanas, mas você pode revisar os materiais e atividades pelo tempo que desejar durante o acesso.',
    },
    {
      question: 'E se eu não tiver tempo para me preparar?',
      answer:
        'O conteúdo é flexível e adaptável à sua rotina. Você pode assistir às aulas no seu ritmo e combinar as mentorias individuais nos horários disponíveis.',
    },
    {
      question: 'Qual plataforma é utilizada?',
      answer:
        'Utilizamos uma plataforma online intuitiva para aulas e atividades, além de reuniões ao vivo pelo Google Meet ou Zoom.',
    },
    {
      question: 'Existe algum suporte?',
      answer:
        'Sim! Você conta com suporte contínuo da equipe da Voa Trainee via e-mail e WhatsApp durante todo o programa.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
          Dúvidas frequentes
        </h2>

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

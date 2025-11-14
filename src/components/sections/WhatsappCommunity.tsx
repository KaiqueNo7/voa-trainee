'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../logo';

export default function WhatsappCommunity() {
  return (
    <section className="w-full py-12 px-6 md:px-8 lg:px-16 bg-white">
      <div className="w-full flex flex-col justify-center items-center mx-auto bg-linear-to-r from-blue-800 to-blue-600 rounded-3xl text-center text-white py-16 px-8 shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Entre para a comunidade no WhatsApp e fique por dentro de tudo!
        </h2>
        <p className="text-base md:text-lg mb-2">
          Conteúdos exclusivos, oportunidades e avisos importantes só para quem está dentro.
        </p>
        <p className="text-sm md:text-base mb-8 opacity-90">
          Você vai querer fazer parte.
        </p>

        <Logo />

        <a
          href="https://chat.whatsapp.com/LL7eIkoQTKYI5Y04ypKIjX?mode=wwt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shadow-2xl items-center gap-2 mt-6 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
        >
          Entrar na comunidade
          <FaWhatsapp size={18} />
        </a>
      </div>
    </section>
  );
}

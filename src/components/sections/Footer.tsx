'use client';

import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import Logo from '../logo';
import Links from '../links';

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-blue-900 to-blue-700 text-white py-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8">
        <div className="flex items-center gap-4 w-full">
          <h3 className="text-xl font-semibold">Voe com a Voa Trainee.</h3>
          <Logo />
        </div>

        <div className="flex items-center justify-between w-full flex-col md:flex-row gap-8">
          <Links />

          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://wa.me/5511921825233"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/voatrainee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/voatrainee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@voa.trainee?_r=1&_t=ZS-914cXOvbQWt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

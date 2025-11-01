'use client';

import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import Logo from '../logo';
import Links from '../links';

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-blue-900 to-blue-700 text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Logo />
          <h3 className="text-xl font-semibold">Voe com a Voa Trainee</h3>
        </div>

        <Links />

        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

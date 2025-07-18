'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [lang, setLang] = useState<'en' | 'fr'>('en'); // Add more as needed

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <nav className="glass fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 px-6 py-3 flex justify-between items-center backdrop-blur-md text-white">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png" // replace with actual filename if different
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full" // or remove for square or custom shape
        />
      </div>
      <div className="flex items-center gap-6 text-sm font-light">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button
          onClick={toggleLang}
          className="bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition"
        >
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}

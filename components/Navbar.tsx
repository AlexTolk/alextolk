'use client';

import { useState } from 'react';

export default function Navbar() {
  const [lang, setLang] = useState<'en' | 'fr'>('en'); // Add more as needed

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <nav className="glass fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 px-6 py-3 flex justify-between items-center backdrop-blur-md text-white">
      <h1 className="text-lg font-semibold tracking-wide">Alex Tolk</h1>
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

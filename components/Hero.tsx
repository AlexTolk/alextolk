'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen px-4"
    >
      <div className="glass p-8 rounded-3xl max-w-3xl shadow-lg">
        <Image src="/images/profile.jpeg" alt="Profile" width={500} height={500} />
        <h1 className="text-4xl font-semibold mb-2 text-white">Hi, I&apos;m Alexander Tolkachev</h1>
        <p className="text-xl text-white/80 mb-4">Multilingual Developer & Language Teacher</p>
        <p className="text-base text-white/60">
          I craft elegant, international web experiences. Fluent in code and 6 languages.
        </p>
      </div>
    </section>
  );
}
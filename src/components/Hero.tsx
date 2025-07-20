'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen"
    >
      <div className="glass flex flex-col md:flex-row items-center justify-center md:items-start gap-6 p-8 rounded-3xl max-w-3xl shadow-lg">
        <Image
          src="/images/profile.jpeg"
          alt="Profile"
          width={200}
          height={200} 
          className='rounded-full' />
        <div>
          <h1 className="text-4xl font-semibold mb-2 text-white">{t('greeting')}</h1>
          <p className="text-xl text-white/80 mb-4">{t('tagline')}</p>
          <p className="text-base text-white/60">{t('description')}</p>
        </div>
      </div>
    </section>
  );
}
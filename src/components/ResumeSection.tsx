'use client';

import { useTranslations } from 'next-intl';

export default function ResumeSection() {
  const t = useTranslations('resume');
  
  return (
    <section className="max-w-xl mx-auto p-6 rounded-xl bg-white/10 backdrop-blur shadow-xl my-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
      <p className="text-white/80 mb-6">{t('description')}</p>
      <a
        href="/resume.pdf"
        download
        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
      >
        {t('download')}
      </a>
    </section>
  );
}
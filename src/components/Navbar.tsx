'use client';

import { usePathname, useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher'; // Import your new component

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const t = useTranslations('navbar');

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <nav className="glass fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 px-6 py-3 flex justify-between items-center backdrop-blur-md text-white">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center gap-6 text-sm font-light">
        <a href="#hero" className="hover:underline hover:text-white/80 transition-colors">
          {t('home')}
        </a>
        <a href="#projects" className="hover:underline hover:text-white/80 transition-colors">
          {t('projects')}
        </a>
        <a href="#contact" className="hover:underline hover:text-white/80 transition-colors">
          {t('contact')}
        </a>
        {/* Replace the old buttons with the new component */}
        <LanguageSwitcher 
          currentLocale={currentLocale} 
          onLocaleChange={switchLocale} 
        />
      </div>
    </nav>
  );
}
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/mqabvqbw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError(false);
      } else {
        setError(true);
      }
    } catch (_err) {
      setError(true);
      console.log(_err);
    }
  };

  return (
    <div id="contact" className="max-w-xl mx-auto p-6 rounded-xl bg-white/10 backdrop-blur shadow-xl">
      {submitted ? (
        <p className="text-green-400 text-center text-lg font-semibold">
          ✅ {t('success')}
        </p>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('title')}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <textarea
              name="message"
              placeholder={t('message')}
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition"
            >
              {t('send')}
            </button>
            {error && (
              <p className="text-red-400 text-sm text-center">
                ❌ {t('errorMessage')}
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
}
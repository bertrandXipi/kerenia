'use client';

import React, { useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLocale } from '@/components/LocaleProvider';

const ContactContent: React.FC = () => {
  const { t } = useLocale();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pb-20 pt-24 bg-cream-50">
      <div className="bg-cream-100 py-16 mb-16 border-b border-brick-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-condensed text-brick-600 uppercase tracking-widest text-sm font-bold mb-2">{t.contact.question}</h3>
          <h1 className="font-script text-5xl md:text-6xl text-brick-600 mb-6">{t.contact.title}</h1>
          <div className="w-16 h-1 bg-brick-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            {t.contact.formIntro}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="bg-cream-50 p-8 md:p-10 shadow-lg border border-brick-200">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="font-condensed font-bold text-3xl text-brick-800 mb-4 uppercase">{t.contact.messageSent}</h3>
                <p className="text-slate-600">{t.contact.willReply}</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brick-600 font-bold hover:underline font-condensed uppercase tracking-wide"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brick-800 mb-2 uppercase tracking-wide font-condensed">{t.contact.fullName}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-all rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-brick-800 mb-2 uppercase tracking-wide font-condensed">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-all rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-brick-800 mb-2 uppercase tracking-wide font-condensed">{t.contact.subject}</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-all rounded-sm"
                  >
                    <option value="">{t.contact.selectSubject}</option>
                    <option value="reservation">{t.contact.reservation}</option>
                    <option value="info">{t.contact.information}</option>
                    <option value="other">{t.contact.other}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-brick-800 mb-2 uppercase tracking-wide font-condensed">{t.contact.message}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-all rounded-sm"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brick-600 text-white font-condensed font-bold uppercase tracking-widest py-4 hover:bg-brick-700 transition-all shadow-md rounded-sm"
                >
                  {t.contact.send}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-10">
            <div className="bg-cream-50 border-l-4 border-brick-600 p-8 shadow-lg">
              <h3 className="font-script text-3xl mb-6 text-brick-600">{t.contact.coordinates}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-brick-600 mt-1"><MapPin size={24} /></div>
                  <div>
                    <p className="font-condensed font-bold mb-1 text-brick-800 text-sm uppercase">{t.contact.address}</p>
                    <p className="text-lg leading-relaxed text-slate-600 font-light">{CONTACT_INFO.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-brick-600 mt-1"><Phone size={24} /></div>
                  <div>
                    <p className="font-condensed font-bold mb-1 text-brick-800 text-sm uppercase">{t.contact.phone}</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg text-slate-600 hover:text-brick-600 transition-colors font-light">{CONTACT_INFO.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-brick-600 mt-1"><Mail size={24} /></div>
                  <div>
                    <p className="font-condensed font-bold mb-1 text-brick-800 text-sm uppercase">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-slate-600 hover:text-brick-600 transition-colors font-light">{CONTACT_INFO.email}</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-80 w-full shadow-lg border border-stone-200 bg-stone-100 flex items-center justify-center">
              <iframe
                src={CONTACT_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

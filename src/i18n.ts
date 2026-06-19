import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

i18n
  // Detects user browser language
  .use(LanguageDetector)
  // Passes the i18n instance down to react-i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    fallbackLng: 'en', // Use English if the detected language isn't supported
    supportedLngs: ['en', 'es'],

    // Crucial: Treats es-ES, es-AR, es-MX simply as 'es'
    load: 'languageOnly',

    detection: {
      // Order of preference for detection
      // 1st checks localStorage (if they changed it manually), 2nd checks browser settings
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Caches the language selection on localStorage
    },
    interpolation: {
      escapeValue: false, // React already safeguards against XSS
    },
  });

export default i18n;

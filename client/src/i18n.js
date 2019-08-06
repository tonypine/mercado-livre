import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: 'en-US',
    fallbackLng: ['en-US', 'pt-BR', 'es'], // use en if detected lng is not available

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      wait: true,
      useSuspense: false
    }
  });

export default i18n;

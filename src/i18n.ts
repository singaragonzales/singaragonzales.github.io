import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      /* translation file path */
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: 'es',
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });
export default i18n;

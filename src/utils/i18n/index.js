import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';

const resources = {
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // Fix issue https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

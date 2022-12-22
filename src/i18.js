import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import mainEn from 'translations/en/main.json';
import mainUa from 'translations/ua/main.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
      resources: {
          en: {
              main: mainEn,
          },
          ua: {
              main: mainUa
          }
      },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
  });

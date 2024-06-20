// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./languages/uz";
import ru from "./languages/ru";
import en from "./languages/en";

// Sample translation resources
const resources = {
  en: en,
  ru: ru,
  uz: uz
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;

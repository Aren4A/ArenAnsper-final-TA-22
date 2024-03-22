import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locale/en.json'
import etJSON from './locale/et.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    et: { ...etJSON },
  },
  lng: "en",
});

import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import backend from "i18next-http-backend"

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false // react already safes from xss
    },
  }).then()

export default i18n;
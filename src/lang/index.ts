import { createI18n } from "vue-next-i18n";
import zhLogin from './zhCHS/login'
import enLogin from './en/login'

const messages = {
  en: {
    login: enLogin
  },
  zhCHS: {
    login: zhLogin
  },
};

const i18n = createI18n({
  locale: "zhCHS",
  messages,
  localeKeys: ["zhCHS", "en"],
});

export default i18n;

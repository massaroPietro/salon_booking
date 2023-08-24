import {createI18n} from "vue-i18n";
import messages from "@/locales/messages";

let lang = navigator.language.substring(0, 2);

const i18n = createI18n({
    legacy: false,
    locale: lang,
    messages,
});

export default i18n;

import Keys from './config/LOCAL_STORAGE_KEYS.js';

const {
  CURRENT_LANGUAGE,
  SELECTED_LANGUAGES,
  LANGUAGE_SWITCH_COMBINATION,
  AUXILIARY_TRIGGERS,
  LAYOUT,
  CONFIG,
} = Keys;

const LocalStorageManager = {
  getUserConfig() {
    return JSON.parse(localStorage.getItem(CONFIG));
  },
  setUserConfig(config) {
    return localStorage.setItem(CONFIG, JSON.stringify(config));
  },

  getLanguage() {
    return localStorage.getItem(CURRENT_LANGUAGE);
  },
  getLanguages() {
    return localStorage.getItem(SELECTED_LANGUAGES);
  },
  getLanguageSwitchCombination() {
    return localStorage.getItem(LANGUAGE_SWITCH_COMBINATION);
  },
  getAuxiliaryTriggers() {
    return localStorage.getItem(AUXILIARY_TRIGGERS);
  },
  getLayout() {
    return localStorage.getItem(LAYOUT);
  },

  setLanguage(lang) {
    return localStorage.setItem(CURRENT_LANGUAGE, lang);
  },
  setLanguages(langs) {
    return localStorage.setItem(SELECTED_LANGUAGES, langs.join(','));
  },
  setLanguageSwitchCombination(comb) {
    return localStorage.setItem(LANGUAGE_SWITCH_COMBINATION, comb.join(','));
  },
  setAuxiliaryTriggers(triggers) {
    return localStorage.setItem(AUXILIARY_TRIGGERS, triggers.join(','));
  },
  setLayout(layout) {
    return localStorage.setItem(LAYOUT, layout);
  },
};

export default LocalStorageManager;

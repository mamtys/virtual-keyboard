import Keys from '../config/LOCAL_STORAGE_KEYS';

const {
  CONFIG,
} = Keys;

const LocalStorageManager = {
  getUserConfig() {
    return JSON.parse(localStorage.getItem(CONFIG));
  },
  setUserConfig(config) {
    return localStorage.setItem(CONFIG, JSON.stringify(config));
  },
};

export default LocalStorageManager;

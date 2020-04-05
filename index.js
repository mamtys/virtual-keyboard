import VirtualKeyboard from './js/AppContainer.js';
import data from './js/config/KEYBOARD_EVENT_DATA.js';
import LocalStorageManager from './js/LocalStorageManager.js';
import defaults from './js/config/KEYBOARD_DEFAULTS.js';


const config = LocalStorageManager.getUserConfig() || defaults;
console.log(LocalStorageManager.getUserConfig());
const virtualKeyboard = new VirtualKeyboard(data, config);

document.body.appendChild(virtualKeyboard.getNode());
console.log(virtualKeyboard.getNode());

window.addEventListener('beforeunload', () => {
  LocalStorageManager.setUserConfig(virtualKeyboard.getConfig());
});

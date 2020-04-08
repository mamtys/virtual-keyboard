import VirtualKeyboard from './components/VirtualKeyboard/VirtualKeyboardContainer';
import data from './config/KEYBOARD_EVENT_DATA';
import LocalStorageManager from './helpers/LocalStorageManager';
import Doc from './components/Doc';
import defaults from './config/KEYBOARD_DEFAULTS';

const config = LocalStorageManager.getUserConfig() || defaults;

const virtualKeyboard = new VirtualKeyboard(data, config);
const doc = new Doc();

virtualKeyboard.appendComponent(doc);
document.body.appendChild(virtualKeyboard.getNode());

window.addEventListener('beforeunload', () => {
  LocalStorageManager.setUserConfig(virtualKeyboard.getKeyboardConfig());
});

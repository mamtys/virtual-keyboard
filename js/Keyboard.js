import Component from './lib/Component.js';
import KeySwitcher from './KeySwitcher.js';

import pick from './helpers/pick.js';

class Keyboard extends Component {
  constructor(codeTable, languages, currentLanguage) {
    super('<div class="virtual-keyboard__keyboard keyboard"></div>');
    this.switchersMap = null;

    this.initSwitchable(codeTable, languages, currentLanguage);
    this.appendChildren();
  }

  initSwitchable(
    codeTable,
    languages,
    currentLanguage,
  ) {
    const map = new Map();

    codeTable.forEach((languageTable, code) => {
      const filteredTable = pick(languageTable, languages);
      map.set(code, new KeySwitcher(code, filteredTable, currentLanguage));
    });

    this.switchersMap = map;
  }

  appendChildren() {
    this.switchersMap.forEach((el) => this.appendComponent(el));
  }

  displayLanguage(language) {
    this.switchersMap.forEach((el) => el.displayLanguage(language));
  }

  displayAuxiliaryKey(keyCode) {
    this.switchersMap.forEach((el) => el.displayAuxiliaryKey(keyCode));
  }

  pressKey(keyCode) {
    this.switchersMap.get(keyCode).pressKey();
  }

  releaseKey(keyCode) {
    this.switchersMap.get(keyCode).releaseKey();
  }
}

export default Keyboard;

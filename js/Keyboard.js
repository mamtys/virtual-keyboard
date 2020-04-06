import Component from './lib/Component.js';
import KeyCode from './KeyCode.js';

import pick from './helpers/pick.js';

class Keyboard extends Component {
  constructor(codeTable, languages, currentLanguage) {
    super('<div class="virtual-keyboard__keyboard keyboard"></div>');
    this.keyCodeMap = null;

    this.initKeyCodeMap(codeTable, languages, currentLanguage);
    this.appendChildren();
  }

  initKeyCodeMap(
    codeTable,
    languages,
    currentLanguage,
  ) {
    const map = new Map();
    codeTable.forEach((languageTable, code) => {
      if (languageTable.isFunctional) {
        map.set(code, new KeyCode(code, languageTable, currentLanguage));
        return;
      }
      const filteredTable = pick(languageTable, languages);
      map.set(code, new KeyCode(code, filteredTable, currentLanguage));
    });

    this.keyCodeMap = map;
  }

  appendChildren() {
    this.keyCodeMap.forEach((el) => this.appendComponent(el));
  }

  displayLanguage(language) {
    this.keyCodeMap.forEach((el) => el.displayLanguage(language));
  }

  displayAuxiliaryKey(keyCode) {
    this.keyCodeMap.forEach((el) => el.displayAuxiliaryKey(keyCode));
  }

  pressKey(keyCode) {
    try {
      const codeObj = this.keyCodeMap.get(keyCode);
      codeObj.pressKey();
      if (codeObj.isFunctional) {
        return;
      }

      this.output.insert(codeObj.getCurrentValue());
    } catch (err) {
      console.error(`button ${keyCode} not implemented`, err);
    }
  }



  releaseKey(keyCode) {
    this.keyCodeMap.get(keyCode).releaseKey();
    this.output.focus();
  }
}

export default Keyboard;

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

      const newPos = this.insertAfterCursor(codeObj.getCurrentValue());
      this.fixCursorPosition(newPos);
    } catch (err) {
      console.error(`button ${keyCode} not implemented`, err);
    }
  }

  insertAfterCursor(value) {
    const pos = this.output.selectionStart;

    if (this.output.textContent.length === 0) {
      this.output.textContent += value;
      return pos + value.length;
    }

    const array = this.output.textContent.split('');
    array.splice(pos, 0, value);

    this.output.textContent = array.join('');

    return pos + value.length;
  }

  fixCursorPosition(pos) {
    this.output.selectionStart = pos;
    this.output.selectionEnd = pos;
  }

  releaseKey(keyCode) {
    this.keyCodeMap.get(keyCode).releaseKey();

    const x = window.scrollX;
    const y = window.scrollY;

    this.output.focus();
    window.scrollTo(x, y);
  }
}

export default Keyboard;

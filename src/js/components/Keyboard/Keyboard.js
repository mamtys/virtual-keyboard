import Component from '../../../lib/Component';
import KeyCode from '../KeyCode';

import pick from '../../helpers/pick';


class Keyboard extends Component {
  constructor(output, codeTable, config) {
    super('<div class="virtual-keyboard__keyboard keyboard"></div>');
    const { languages, currentLanguage, persistedKeys } = config;

    this.config = config;
    this.output = output;
    this.keyCodeMap = null;
    this.pressedKeys = new Set();
    // for capslock or numlock or alike keys
    this.persistedKeys = new Set(persistedKeys || []);

    this.initKeyCodeMap(codeTable, languages, currentLanguage);
    this.displayAuxiliaryIfNeed();
    this.appendChildren();
  }

  getConfig() {
    return { ...this.config, persistedKeys: [...this.persistedKeys] };
  }

  isAlreadyPressed(keyCode) {
    return this.pressedKeys.has(keyCode) || this.persistedKeys.has(keyCode);
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

  displayMainKeys() {
    this.keyCodeMap.forEach((el) => el.displayMainKey());
  }

  pressKey(keyCode) {
    const codeObj = this.keyCodeMap.get(keyCode);
    if (codeObj) {
      codeObj.pressKey();
    }
    this.pressedKeys.add(keyCode);

    this.displayAuxiliaryIfNeed();

    if (!codeObj || (codeObj || {}).isFunctional) {
      this.funcionalKeyCodeHandler(keyCode);
      return;
    }

    this.output.insert(codeObj.getCurrentValue());
  }

  releaseKey(keyCode) {
    const codeObj = this.keyCodeMap.get(keyCode);

    if (this.shouldLanguageSwitch()) {
      this.switchLanguage();

      this.displayAuxiliaryIfNeed();
    }

    if (codeObj) {
      codeObj.releaseKey();
    }

    this.pressedKeys.delete(keyCode);

    if (this.shouldDisplayMain()) {
      this.displayMainKeys(keyCode);
    }


    this.output.focus();
  }


  togglePersistedKey(keyCode) {
    if (this.persistedKeys.has(keyCode)) {
      this.persistedKeys.delete(keyCode);
      return;
    }

    this.persistedKeys.add(keyCode);
  }

  displayNextLanguage() {
    const { languages, currentLanguage } = this.config;
    let languageIndex = languages.findIndex((el) => el === currentLanguage);

    if (languageIndex === languages.length - 1) {
      languageIndex = -1;
    }

    const newLanguage = languages[languageIndex + 1];

    this.config.currentLanguage = newLanguage;
    this.displayLanguage(newLanguage);
  }

  switchLanguage(language) {
    if (language) {
      this.config.currentLanguage = language;
      this.displayLanguage(language);
      return;
    }
    this.displayNextLanguage();
  }

  shouldLanguageSwitch() {
    const { pressedKeys, config: { languageSwitchCombination } } = this;
    return languageSwitchCombination.every((el) => pressedKeys.has(el));
  }

  getPressedAuxiliaryTriggers() {
    const { auxiliaryTriggers } = this.config;
    return auxiliaryTriggers.filter(
      (trigger) => this.isAlreadyPressed(trigger),
    );
  }

  displayAuxiliaryIfNeed() {
    const activeTriggers = this.getPressedAuxiliaryTriggers();
    (activeTriggers || []).forEach((trigger) => this.displayAuxiliaryKey(trigger));
  }

  shouldDisplayMain() {
    const { auxiliaryTriggers } = this.config;
    return auxiliaryTriggers.every((trigger) => !this.isAlreadyPressed(trigger));
  }


  funcionalKeyCodeHandler(keyCode) {
    const handler = {
      Backspace: () => this.output.deletePrevious(),
      Delete: () => this.output.deleteNext(),
      Enter: () => this.output.returnCarriage(),
      Space: () => this.output.insert(' '),
      Tab: () => this.output.insert('\t'),
      CapsLock: () => {
        this.togglePersistedKey('ShiftLeft');
        this.displayAuxiliaryIfNeed();
      },
      OSLeft: () => alert('Os Button was pressed'),
      ArrowLeft: () => this.output.moveCursorLeft(),
      ArrowRight: () => this.output.moveCursorRight(),
      ArrowUp: () => this.output.moveCursorUp(),
      ArrowDown: () => this.output.moveCursorDown(),
    };
    if (handler[keyCode]) {
      handler[keyCode]();
    }
  }
}

export default Keyboard;

import Component from '../../../lib/Component';
import Key from '../Key';


class KeyCode extends Component {
  constructor(code, languageTable, currentLanguage) {
    super(`<div class="keyboard__key-code key-code_${code.toLowerCase()}"></div>`);
    this.code = code;
    this.languageTable = languageTable;
    this.currentLanguage = currentLanguage;
    this.isFunctional = languageTable.isFunctional;
    this.keyTable = {};
    this.activeKey = null;

    this.initKeyTable(languageTable);
    this.activeKey = this.keyTable[currentLanguage];
    this.activeKey.makeVisible();

    this.appendChildren();
  }

  getCurrentValue() {
    return this.activeKey.getValue();
  }

  initKeyTable(languageTable) {
    const { code, isFunctional, currentLanguage } = this;

    if (isFunctional) {
      this.keyTable[currentLanguage] = new Key({ ...languageTable, code });
      return;
    }

    this.keyTable = Object
      .keys(languageTable)
      .reduce((acc, lang) => {
        acc[lang] = new Key({ ...languageTable[lang], code });
        return acc;
      },
      {});
  }


  displayLanguage(language) {
    if (this.isFunctional) {
      return;
    }

    if (language === this.currentLanguage) {
      return;
    }

    const newActive = this.keyTable[language];

    this.activeKey.makeInvisible();
    newActive.makeVisible();

    this.currentLanguage = language;
    this.activeKey = newActive;
  }

  displayAuxiliaryKey(keyCode) {
    if (this.isFunctional) {
      return;
    }

    this.activeKey.displayAuxiliaryKey(keyCode);
  }

  displayMainKey() {
    this.activeKey.displayMainKey();
  }

  pressKey() {
    this.activeKey.press();
  }

  releaseKey() {
    this.activeKey.release();
  }

  appendChildren() {
    Object.values(this.keyTable).forEach((el) => this.appendComponent(el));
  }
}

export default KeyCode;

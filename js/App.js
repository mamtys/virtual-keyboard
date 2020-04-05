import Component from './lib/Component.js';
import KeyboardContainer from './KeyboardContainer.js';
import Textarea from './Textarea.js';

class App extends Component {
  constructor(data, layout, languages, currentLanguage) {
    super('<div class="virtual-keyboard"></div>');

    this.data = data;
    this.layout = layout;
    this.languages = languages;
    this.currentLanguage = currentLanguage;

    this.keyboard = null;
    this.textarea = new Textarea();

    this.initKeyboard(data[layout], languages, currentLanguage);
    this.appendChildren();
  }

  initKeyboard(codeTable, languages, currentLanguage) {
    this.keyboard = new KeyboardContainer(
      this.textarea.getNode(),
      codeTable,
      languages,
      currentLanguage,
    );
  }

  getConfig() {
    const {
      layout,
      languages,
      languageSwitchCombination,
      currentLanguage,
      auxiliaryTriggers,
    } = this;

    return ({
      layout,
      languages,
      languageSwitchCombination,
      currentLanguage,
      auxiliaryTriggers,
    });
  }

  changeLayout(layout) {
    const { data, languages, currentLanguage } = this;
    this.initKeyboard(data[layout], languages, currentLanguage);
  }

  appendChildren() {
    this.appendComponent(this.textarea);
    this.appendComponent(this.keyboard);
  }

  displayNextLanguage() {
    const { keyboard, languages, currentLanguage } = this;
    let languageIndex = languages.findIndex((el) => el === currentLanguage);

    if (languageIndex === languages.length - 1) {
      languageIndex = 0;
    }

    const newLanguage = languages[languageIndex + 1];

    this.currentLanguage = newLanguage;
    keyboard.displayLanguage(newLanguage);
  }

  switchLanguage(language) {
    const { keyboard } = this;

    if (language) {
      this.currentLanguage = language;
      keyboard.displayLanguage(language);
      return;
    }

    this.displayNextLanguage();
  }
}

export default App;

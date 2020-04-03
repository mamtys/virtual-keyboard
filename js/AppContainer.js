import App from './App.js';

class AppContainer extends App {
  constructor(data, {
    layout,
    languages,
    languageSwitchCombination,
    currentLanguage,
    auxiliaryTriggers,
  }) {
    super(data, layout, languages, currentLanguage);

    this.languageSwitchCombination = languageSwitchCombination;
    this.auxiliaryTriggers = auxiliaryTriggers;
    this.pressedKeys = new Set();


    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
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

  onKeyDown(event) {
    const keyCode = event.code;
    this.pressedKeys.add(keyCode);
    this.keyboard.pressKey(keyCode);

    if (this.shouldLanguageSwitch()) {
      this.switchLanguage();
    }

    if (this.shouldDisplayAuxiliary()) {
      this.keyboard.displayAuxiliaryKey(keyCode);
    }
  }

  onKeyUp(event) {
    const keyCode = event.code;
    this.pressedKeys.remove(keyCode);
    this.keyboard.pressKey(keyCode);
  }


  shouldLanguageSwitch() {
    const { pressedKeys, languageSwitchCombination } = this;
    return languageSwitchCombination.every(pressedKeys.has);
  }

  shouldDisplayAuxiliary() {
    const { pressedKeys, auxiliaryTriggers } = this;
    return auxiliaryTriggers.some(pressedKeys.has);
  }

}

export default AppContainer;

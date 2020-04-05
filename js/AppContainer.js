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


    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    event.preventDefault();
    event.stopPropagation();

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
    event.preventDefault();
    event.stopPropagation();

    const keyCode = event.code;

    this.pressedKeys.delete(keyCode);
    this.keyboard.releaseKey(keyCode);
  }


  shouldLanguageSwitch() {
    const { pressedKeys, languageSwitchCombination } = this;
    return languageSwitchCombination.every((el) => pressedKeys.has(el));
  }

  shouldDisplayAuxiliary() {
    const { pressedKeys, auxiliaryTriggers } = this;
    return auxiliaryTriggers.some((el) => pressedKeys.has(el));
  }

  funcionalKeyCodeHandler(keyCode) {
    const handler = {
      Backspace: this.deleteSelected(),
      Enter: this.returnCarriage(),
      Space: this.insertSpace(),
    };
    return handler[keyCode];
  }
}

export default AppContainer;

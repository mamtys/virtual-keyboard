import VirtualKeyboard from '../src/js/components/VirtualKeyboard/VirtualKeyboard';

class VirtualKeyboardContainer extends VirtualKeyboard {
  constructor(data, keyboardKonfig) {
    super(data, keyboardKonfig);

    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    event.preventDefault();

    const keyCode = event.code;
    this.keyboard.pressKey(keyCode);
  }

  onKeyUp(event) {
    event.preventDefault();

    const keyCode = event.code;
    this.keyboard.releaseKey(keyCode);
  }
}

export default VirtualKeyboardContainer;

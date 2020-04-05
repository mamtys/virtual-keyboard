import Keyboard from './Keyboard.js';

class KeyboardContainer extends Keyboard {
  constructor(output, codeTable, languages, currentLanguage) {
    super(codeTable, languages, currentLanguage);
    this.output = output;
    this.wasClicked = false;

    this.node.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.node.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.node.addEventListener('mouseout', this.onMouseOut.bind(this));
  }

  onMouseUp(event) {
    const { target, target: { dataset: { code } } } = event;
    if (!target.matches('.keyboard__key')) {
      return;
    }
    this.wasClicked = false;
    this.releaseKey(code);
  }

  onMouseDown(event) {
    const { target, target: { dataset: { code } } } = event;
    if (!target.matches('.keyboard__key')) {
      return;
    }
    this.wasClicked = true;
    this.pressKey(code);
  }

  onMouseOut(event) {
    const { target, target: { dataset: { code } } } = event;
    if (!target.matches('.keyboard__key')) {
      return;
    }
    if (this.wasClicked) {
      console.log('out');
      this.releaseKey(code);
      this.wasClicked = false;
    }
  }
}

export default KeyboardContainer;

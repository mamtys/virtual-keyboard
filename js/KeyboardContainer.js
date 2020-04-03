import Keyboard from './Keyboard.js';
import insertAfterCursor from './helpers/insertAfterCursor.js';

class KeyboardContainer extends Keyboard {
  constructor(output, codeTable, languages, currentLanguage) {
    super(codeTable, languages, currentLanguage);
    this.output = output;
    this.node.addEventListener('click', this.onClick);
  }


  onClick(event) {
    const { target } = event;
    if (!target.matches('keyboard__key')) {
      return;
    }

    const { value } = target;
    insertAfterCursor(this.output, value);
  }
}

export default KeyboardContainer;

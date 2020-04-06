import Component from ';
import KeyboardContainer from './Keyboard';
import Textarea from './Textarea';

class App extends Component {
  constructor(data, keyboardConfig) {
    super('<div class="virtual-keyboard"></div>');
    const { layout } = keyboardConfig;
    this.data = data;
    this.layout = layout;

    this.keyboard = null;
    this.textarea = new Textarea();

    this.initKeyboard(data[layout], keyboardConfig);
    this.appendChildren();
  }

  initKeyboard(codeTable, keyboardConfig) {
    this.keyboard = new KeyboardContainer(
      this.textarea,
      codeTable,
      keyboardConfig,
    );
  }

  getKeyboardConfig() {
    return this.keyboard.getConfig();
  }

  appendChildren() {
    this.appendComponent(this.textarea);
    this.appendComponent(this.keyboard);
  }
}

export default App;

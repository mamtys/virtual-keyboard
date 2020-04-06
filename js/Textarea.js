import Component from '../../lib/Component';
import getNextEndOfLine from '../../helpers/getNextEndOfLine';
import getPreviousEndOfLine from '../../helpers/getPreviousEndOfLine';

class Textarea extends Component {
  constructor() {
    super('<textarea class="virtual-keyboard__textarea textarea" autofocus></textarea>');
  }

  isNotSelected() {
    return this.node.selectionStart === this.node.selectionEnd;
  }

  insert(value) {
    const start = this.node.selectionStart;
    const end = this.node.selectionEnd - start;

    const array = this.node.textContent.split('');
    array.splice(start, end, value);
    this.node.textContent = array.join('');

    this.fixCursorPosition(start + value.length);
  }

  fixCursorPosition(pos) {
    this.node.selectionStart = pos;
    this.node.selectionEnd = pos;
  }

  focus() {
    const x = window.scrollX;
    const y = window.scrollY;

    this.node.focus();
    window.scrollTo(x, y);
  }
}

export default Textarea;

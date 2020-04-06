import Component from '../../../lib/Component';
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

  deletePrevious() {
    if (this.isNotSelected()) {
      this.node.selectionStart -= 1;
    }

    this.insert('');
  }

  deleteNext() {
    if (this.isNotSelected()) {
      this.node.selectionEnd += 1;
      this.node.selectionStart -= 1;
    }

    this.insert('');
  }

  returnCarriage() {
    this.insert('\n');
  }

  moveCursorUp() {
    const start = this.node.selectionStart;
    const firstEol = getPreviousEndOfLine(this.node.textContent, start);
    let secondEol = getPreviousEndOfLine(this.node.textContent, start - firstEol - 1);

    if (firstEol === -1) {
      this.fixCursorPosition(0);
      return;
    }

    if (secondEol === -1) {
      secondEol = 0;
    }

    if (secondEol > firstEol) {
      this.fixCursorPosition(start - secondEol - 1);
      return;
    }

    this.fixCursorPosition(start - firstEol - 1);
  }

  moveCursorDown() {
    const start = this.node.selectionStart;
    const end = this.node.textContent.length;
    const firstEol = getNextEndOfLine(this.node.textContent, start);
    let secondEol = getNextEndOfLine(this.node.textContent, start + firstEol + 1);

    if (firstEol === -1) {
      this.fixCursorPosition(end);
      return;
    }

    if (secondEol === -1) {
      secondEol = end;
    }

    if (firstEol <= secondEol) {
      this.fixCursorPosition(start + firstEol + secondEol + 1);
      return;
    }

    this.fixCursorPosition(start + secondEol - firstEol + 1);
  }

  moveCursorRight() {
    const currentPos = this.node.selectionStart;
    if (currentPos > this.node.textContent.length - 1) {
      return;
    }
    this.fixCursorPosition(currentPos + 1);
  }

  moveCursorLeft() {
    const currentPos = this.node.selectionStart;
    if (currentPos < 1) {
      return;
    }
    this.fixCursorPosition(currentPos - 1);
  }
}

export default Textarea;

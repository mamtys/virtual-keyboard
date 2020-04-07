import Component from '../../lib/Component';

class Key extends Component {
  constructor({
    value,
    code,
    auxiliary,
    isFunctional = false,
  }) {
    super(`<div class="keyboard__key" data-isfunctional=${Number(isFunctional)} data-code=${code}>${value}</div>`);
    this.mainKey = value;
    this.auxTable = auxiliary;

    this.currentValue = value;
  }

  getValue() {
    return this.currentValue;
  }

  displayMainKey() {
    this.node.textContent = this.mainKey;
    this.currentValue = this.mainKey;
  }

  displayAuxiliaryKey(auxCode) {
    if (!this.auxTable[auxCode]) {
      return;
    }

    this.node.textContent = this.auxTable[auxCode];
    this.currentValue = this.auxTable[auxCode];
  }

  makeVisible() {
    this.node.classList.add('keyboard__key_visible');
  }

  makeInvisible() {
    this.node.classList.remove('keyboard__key_visible');
  }

  press() {
    this.node.classList.add('keyboard__key_pressed');
  }

  release() {
    this.node.classList.remove('keyboard__key_pressed');
  }

  compare(component) {
    const [node1, node2] = [this.node, component.getNode()];
    return node1.isEqualNode(node2);
  }
}

export default Key;


class Component {
  constructor(template) {
    this.template = template;
    this.node = null;
    this.initNode();
  }

  getNode() {
    return this.node;
  }

  appendComponent(component) {
    this.node.appendChild(component.getNode());
  }

  remove() {
    this.node.remove();
  }

  initNode() {
    if (!this.template) {
      throw new Error('Component must implement create function');
    }

    const template = document.createElement('template');
    template.innerHTML = this.template;

    this.node = template.content.firstElementChild;

    if (!this.node) {
      throw new Error(`Failed Create node with template: ${this.template}`);
    }
  }
}

export default Component;

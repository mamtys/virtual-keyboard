import Component from './lib/Component.js';

class Textarea extends Component {
  constructor() {
    super('<textarea class="virtual-keyboard__textarea textarea" autofocus></textarea>');
  }
}

export default Textarea;

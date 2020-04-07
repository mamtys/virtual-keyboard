import Component from '../../lib/Component';

class Doc extends Component {
    constructor() {
        super('<div class="virtual-keyboard__doc"></div>');
        this.node.textContent = 'Keyboard was created at Win OS \n Lang Switch = Shift + LeftAlt';
    } 
}

export default Doc;
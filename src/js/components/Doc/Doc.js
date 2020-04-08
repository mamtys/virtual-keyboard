import Component from '../../lib/Component';

class Doc extends Component {
    constructor() {
        super('<div class="virtual-keyboard__doc"></div>');
        this.node.textContent = `Warning: I didn't notice, layout is broken in chrome, use firefox to check functionslity
UPD: fixed chrome bug 08.04.20
Keyboard was created at Win OS
Lang Switch = Shift + LeftAlt`;
    } 
}

export default Doc;
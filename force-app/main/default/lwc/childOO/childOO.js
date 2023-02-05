import { api, LightningElement } from 'lwc';

export default class ChildOO extends LightningElement {
    @api buttonlabel = 'ChildOO';

    get name() {
        return this.buttonlabel;
    }
    handleClick() { 
        const event = new CustomEvent('childclick', {
            detail: {
                name: 'ChildOO'
            }
        });
        this.dispatchEvent(event);
    }
}
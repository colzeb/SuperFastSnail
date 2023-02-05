import { api, LightningElement } from 'lwc';

export default class ParentOO extends LightningElement {
    @api recordId;
    name = 'ParentOO';
    handleChildClick(event) {
        console.log('ParentOO received child event');
        console.log(event.detail.name);
        this.name = event.detail.name;
    }

    handleNameChange(event) {
        this.name = event.target.value;
        console.log('this.name: ' + this.name);
        console.log('event.target.value: ' + event.target.value);
    }
}
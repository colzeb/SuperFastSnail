import { LightningElement } from 'lwc';

export default class ContactDetailParent extends LightningElement {
    name = "value1";

    handleChange(event){
        this.name = "value3";
    }
}
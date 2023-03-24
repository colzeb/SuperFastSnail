import { LightningElement } from "lwc";

export default class RequiredCondition extends LightningElement {
  hello = "Input Here ...";
  required = false;
  isSelected = false;

  handleChange(event) {
    console.log("Event name ", JSON.stringify(event.target));
    this.required = !this.required;
    this.isSelected = !this.isSelected;
  }
}

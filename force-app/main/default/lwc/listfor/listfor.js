import { LightningElement, track } from 'lwc';

export default class Listfor extends LightningElement {

    @track listName = ["test alpha", "test 2", "test 3"];
    @track sliceName = [];


    connectedCallback(){
        for(let i = 0; i < 10; i++){
            this.listName.push("Test " + i);
        }
        console.log(this.listName);

        //functional style
        this.listName.forEach(console.log);

        this.listName.pop();
        this.listName.push("push at 0");

        this.listName.shift();// remove 0 index
        this.listName.unshift("unshift"); //insert at 0

        this.sliceName = this.listName.slice(1,3);

    }

    // renderedCallback(){
    //     this.listName.push("after rendered callback");
    //     console.log("After render finish");
    // }

}
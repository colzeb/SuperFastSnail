import { api, LightningElement, track } from 'lwc';

const columns = [
    { label: 'Name', fieldName: 'name' },
    {
        label: 'Description',
        fieldName: 'description',
    }
    
];
export default class SelectedRecord extends LightningElement {
    columns = columns;

    allRecord = [{ name: 'Name', description: '555' }];

    @api record;

    get data() {
        console.log('Hello from getter');
        return this.allRecord;
    }

    handleData() {
        // this.data = [{ name: this.record.name, description: this.record.age }];
        console.log(JSON.stringify(this.record));
    }

    @api
    publiccc() {
        console.log("hello method from passing directly to html");
    }
    

    @api
    publicMethod(data) {
        this.data.push({ name: data.name, description: data.age });
        this.data = [...this.data];
        console.log(JSON.stringify(this.data));
        return "Hello from child";
    }
}
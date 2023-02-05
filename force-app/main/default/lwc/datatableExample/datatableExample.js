import { LightningElement, track } from 'lwc';

export default class DatatableExample extends LightningElement {
    columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Age', fieldName: 'age' },
        {
            label: 'link to account',
            fieldName: 'link',
            type:'url',
            typeAttributes: {label: {fieldName: 'name'}, tooltip: { fieldName: 'age' } }, 
        },
    ];
    @track record;


    @track data = [
        {
            name: 'Bob',
            age: 32,
            link: '/0015i00000OKrTvAAL'
        },
        {
            name: 'Alice',
            age: 36,
            link: '/0015i00000OKrTvAAL'
        },
        {
            name: 'John',
            age: 40,
            link: '/0015i00000OKrTvAAL'
        }
    ];

    handleClick() {
        console.log('inside the hello click evnet');
        this.data.push({ name: 'Pankaj', age: 34 });
        this.data = [...this.data];
        console.log(JSON.stringify(this.data));
        this.record = { name: 'Pankaj', age: 34 };
    }
    callChild() {
        const data = { name: 'Pankaj', age: 34 };
        const childMethod = this.template.querySelector('c-selected-record').publicMethod(data);
        console.log(childMethod);
    }
}
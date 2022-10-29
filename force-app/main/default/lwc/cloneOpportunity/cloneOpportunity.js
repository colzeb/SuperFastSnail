import { api, LightningElement, track, wire } from 'lwc';
import getAccountRelatedOpportunity from '@salesforce/apex/CloneOpportunityController.getAccountRelatedOpportunity';

function debug(data, hint='Debug') {
    console.log(hint + ' ' + JSON.stringify(data));
}

export default class CloneOpportunity extends LightningElement {
    @api recordId;
    @track opportunities;
    haveResult = false;

    @wire(getAccountRelatedOpportunity, {accountId: '$recordId'})
    calloutResult({error, data}){
        if(data){
            this.opportunities = data;
            this.haveResult = true;
            debug(this.opportunities, 'Wire Setup');
        }
    }

    handleCancle(){
        console.log('record id ' +this.recordId);
        console.log(JSON.stringify(this.opportunities));
    }
}
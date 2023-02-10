import { LightningElement } from 'lwc';

export default class GpsClaimsTable extends LightningElement {
    callFlow = false;
    columns = [
        { label: 'Claim ID', fieldName: 'claimId' },
        { label: 'Claim Type', fieldName: 'claimType' },
        { label: 'Claim Status', fieldName: 'claimStatus' },
        { label: 'Claim Date', fieldName: 'claimDate' },
        { label: 'Claim Amount', fieldName: 'claimAmount' },
    ];

    data = [
        {
            claimId: '1', claimType: 'Auto', claimStatus: 'Open', claimDate: '01/01/2020', claimAmount: '$1000',
            _children: [{ claimId: '1.1', claimType: 'Auto', claimStatus: 'Open', claimDate: '01/01/2020', claimAmount: '$1000' },
                { claimId: '1.2', claimType: 'Auto', claimStatus: 'Open', claimDate: '01/01/2020', claimAmount: '$1000' }
            ],
        },
        { claimId: '2', claimType: 'Home', claimStatus: 'Closed', claimDate: '01/01/2020', claimAmount: '$2000' },
        { claimId: '3', claimType: 'Auto', claimStatus: 'Open', claimDate: '01/01/2020', claimAmount: '$3000' },
        { claimId: '4', claimType: 'Home', claimStatus: 'Closed', claimDate: '01/01/2020', claimAmount: '$4000' },
        { claimId: '5', claimType: 'Auto', claimStatus: 'Open', claimDate: '01/01/2020', claimAmount: '$5000' },
    ];


    handleRowSelection(event) { 
        console.log('handleRowSelection');
        const selectedRows = event.detail.selectedRows;
        selectedRows.forEach(row => {
            console.log(row.claimId);
        });
    }

    handleSave() { 
        console.log('handleSave');
        // call the public method of treeGrid

        const selectedRows = this.template.querySelector('lightning-tree-grid').getSelectedRows();
        selectedRows.forEach(row => {
            console.log(row.claimId);
        });
        this.callFlow = true;
    }

    handleRowAction(event) {
        console.log(JSON.stringify(event.detail));
    }

    get flowInput() {
        return { 'someList': ['123' , '234'] };
    }
}
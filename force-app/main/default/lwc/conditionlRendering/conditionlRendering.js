import { LightningElement, wire } from 'lwc';
import userid from '@salesforce/user/Id';

import Name from '@salesforce/schema/User.Name';
import ProfileName from '@salesforce/schema/User.Profile.Name';
import UserRoleName from '@salesforce/schema/User.UserRole.Name';
import { getRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ConditionlRendering extends LightningElement {

    userName;
    profileName;
    roleName;

    currentUserId = userid;
    @wire(getRecord, {recordId: '$currentUserId', fields: [Name, ProfileName, UserRoleName]})
    user({data, error}){
        console.log("soemthing from conditional rendering" + error);
        if(error){
            const showMessage = new ShowToastEvent({
                title: "Error",
                message: "something went wrong",
                variant: "error"
            });
            this.dispatchEvent(showMessage);
        }
        if(data){
            this.userName = data.fields.Name.value;
            this.profileName =  data.fields.Profile.value.fields.Name.value;
            this.roleName = data.fields.UserRole.value.fields.Name.value;
            console.log(JSON.stringify(data));
            console.log("user name " + this.userName);
            console.log(this.profileName);
        }
    }
}
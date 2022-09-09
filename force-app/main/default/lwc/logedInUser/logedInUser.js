import { LightningElement, track, wire } from 'lwc';
import RoleName from '@salesforce/schema/User.UserRole.Name';
import ProfileName from '@salesforce/schema/User.Profile.Name';
import ManagerName from '@salesforce/schema/User.Manager.Name';
import Name from '@salesforce/schema/User.Name';
import currentUserId from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LogedInUser extends LightningElement {
    userId = currentUserId;

    @track
    user = {name: 'Pankaj', profileName: '', managerName: '', roleName: ''};

    @wire(getRecord, {recordId: '$userId', fields:[Name, RoleName, ProfileName, ManagerName]})
    currentUser({error, data}){
        console.log(JSON.stringify(data));
        if(error){
            return;
        }
        if(data){
            this.user.name = data.fields.Name.value;
            this.user.profileName = data.fields.Profile.value.fields.Name.value;
            this.user.roleName =  data.fields.UserRole.value.fields.Name.value;
            this.user.managerName = data.fields.Manager.value;

            let dynMessage = this.user.profileName == "System Administrator" ? "Welcome Admin" : "Welcome business User";
            let dynVariant = this.user.profileName == "System Administrator" ? "Success": "Info";

            const showMessage = new ShowToastEvent({
                title: "User Profile",
                message: dynMessage,
                variant: dynVariant
            });
            this.dispatchEvent(showMessage);
        }

    }
}
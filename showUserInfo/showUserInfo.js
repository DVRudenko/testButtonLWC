import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Account.OwnerId';
import NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import EMAIL_FIELD from '@salesforce/schema/Account.Owner.Email';

export default class ShowUserInfo extends LightningElement {

    @api relatedRecordId;
     
    @wire(getRecord, { recordId: '$relatedRecordId', 
        fields: [ID_FIELD,
            NAME_FIELD,
            EMAIL_FIELD
        ] 
    })
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

    get id() {
        return getFieldValue(this.user.data, ID_FIELD);
    }

    get email() {
        return getFieldValue(this.user.data, EMAIL_FIELD);
    }

    contactHandler() {
        this.dispatchEvent(new CustomEvent('contact'));
    }
}
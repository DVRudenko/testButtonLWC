import { LightningElement, wire, api } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import CREATED_DATE_FIELD from '@salesforce/schema/Contact.CreatedDate';
import LAST_MODIFIED_DATE_FIELD from '@salesforce/schema/Contact.LastModifiedDate';
import getRelatedContacts from '@salesforce/apex/ContactController.getRelatedContacts';
    const COLUMNS = [
        { label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
        { label: 'Last Name', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
        { label: 'CreatedDate', fieldName: CREATED_DATE_FIELD.fieldApiName, type: 'date' },
        { label: 'LastModifiedDate', fieldName: LAST_MODIFIED_DATE_FIELD.fieldApiName, type: 'date' }
    ];

export default class ShowRelatedContacts extends LightningElement {
columns = COLUMNS;

@api relatedRecordId;

@wire(getRelatedContacts, { accountId: '$relatedRecordId' })
contacts;

userHandler() {
    this.dispatchEvent(new CustomEvent('user'));
}

}
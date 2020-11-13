import { LightningElement, api } from 'lwc';

export default class Parent extends LightningElement {
    isShowUser = false;

    @api recordId;

    contactHandler() {
        this.isShowUser=false;
    }

    userHandler() {
        this.isShowUser=true;
    }
}
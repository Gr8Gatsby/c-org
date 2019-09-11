import { LightningElement, api } from 'lwc';

export default class People extends LightningElement {
    @api people;

    connectedCallback() {
        window.console.log(this.people);
    }
}

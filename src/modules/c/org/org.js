import { LightningElement, track } from 'lwc';

export default class Org extends LightningElement {
    @track people = [];
    handleSlotChange() {
        const people = this.querySelectorAll('c-person');
        window.console.log(people);
    }
}

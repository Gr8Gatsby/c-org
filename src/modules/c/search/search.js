import { LightningElement, api } from 'lwc';

export default class Search extends LightningElement {
    @api minCharsToSearch = 2;
    @api minCharsForSuggestions = 3;
    @api suggestionData;

    handleInputEvent(evt) {
        window.console.log(evt.target.value);
        if (evt.target.value.length >= this.minCharsForSuggestions) {
            //TODO: get Auto-suggest
            window.console.log('Auto-suggest');
        }
    }

    handleChangeEvent(evt) {
        window.console.log('Current search string is ' + evt.target.value);
        // check if minimum search length is met
        if (evt.target.value.length >= this.minCharsToSearch) {
            // fires search event
            window.console.log('Fire Search event');
        }
    }
}

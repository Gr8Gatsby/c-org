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
        let searchString = evt.target.value;
        // check if minimum search length is met
        if (searchString.length >= this.minCharsToSearch) {
            // fires search event
            const searchEvent = new CustomEvent('search', {
                detail: searchString
            });

            // Dispatches the event.
            this.dispatchEvent(searchEvent);
        }
    }
}

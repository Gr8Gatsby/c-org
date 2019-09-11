import { LightningElement, api, track } from 'lwc';

class Suggestion {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
}

export default class Search extends LightningElement {
    @api minCharsToSearch = 2;
    @api minCharsForSuggestions = 2;
    @api autoSuggestData;
    @track suggest = [];

    // var filteredObj = Object.keys(obj).reduce((p, c) => {
    //     if (obj[c]) p[c] = obj[c];
    //     return p;
    //   }, {});

    handleInputEvent(evt) {
        let lowerCaseSearch = evt.target.value.toLowerCase();
        let suggestions = [];
        if (lowerCaseSearch.length >= this.minCharsForSuggestions) {
            for (let i = 0; i < this.autoSuggestData.length; i++) {
                if (
                    this.autoSuggestData[i].personName
                        .toLowerCase()
                        .includes(lowerCaseSearch)
                ) {
                    suggestions.push(
                        new Suggestion(i, this.autoSuggestData[i].personName)
                    );
                }
            }
            this.suggest = suggestions;
        }
    }

    handleChangeEvent(evt) {
        let searchString = evt.target.value;
        // check if minimum search length is met
        if (searchString.length >= this.minCharsToSearch) {
            // fires search event
            this.search(searchString);
        }
    }

    handleSuggestionClick(evt) {
        this.search(evt.target.textContent);
    }

    search(searchString) {
        const searchEvent = new CustomEvent('search', {
            detail: searchString
        });

        // Dispatches the event.
        this.dispatchEvent(searchEvent);
    }
}

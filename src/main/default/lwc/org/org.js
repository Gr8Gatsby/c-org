import { LightningElement, track } from "lwc";
import Tree from "c/tree";

export default class Org extends LightningElement {
  tree = new Tree();
  @track people = [];
  @track autoSuggestData = [];

  handleSlotChange() {
    const people = this.querySelectorAll("c-person");

    if (people.length > 0) {
      this.autoSuggestData = people;
      this.tree = new Tree();

      people.forEach(person =>
        this.tree.addPerson(
          person.personKey,
          person.personName,
          person.personTitle,
          person.personBoss
        )
      );

      this.tree.generateOrg(1, this.tree.people);
      this.people = this.tree._generatedOrg;
    }
  }

  handleSearchEvent(evt) {
    window.console.log("Search event received with " + evt.detail);
  }
}

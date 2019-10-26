import { LightningElement, api } from "lwc";

export default class Person extends LightningElement {
  @api personKey;
  @api personName;
  @api personTitle;
  @api personBoss;
  @api personTeam;
}

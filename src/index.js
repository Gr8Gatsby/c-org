import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'c/app';
import MyOrg from 'c/org';
import MyPerson from 'c/person';

customElements.define('c-app', buildCustomElementConstructor(MyApp));
customElements.define('c-org', buildCustomElementConstructor(MyOrg));
customElements.define('c-person', buildCustomElementConstructor(MyPerson));

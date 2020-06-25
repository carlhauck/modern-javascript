/* global moment */

import moment from 'moment';
import { sqrt } from 'mathjs/number';

console.log("JavaScript doesn't care either!");
var bday = moment("19870812", "YYYYMMDD").fromNow();
console.log(bday);
console.log(Number(sqrt(144)));
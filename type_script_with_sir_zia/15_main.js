"use strict";
// Question #15
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist = ["Hanzala", "Rafay", "Haniya", "Hani"];
let not_present = guestlist[0];
console.log(not_present, "will not coming");
guestlist.splice(0, 1, "Amirr");
guestlist.forEach(guest => console.log(`Assalaam u Alaikumm ${guest}, would you like to dinner with me?`));

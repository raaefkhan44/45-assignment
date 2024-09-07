"use strict";
// Question #18
Object.defineProperty(exports, "__esModule", { value: true });
// Making an Array of Countries and Print its Original Order
let countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Print the Array in Alphabetical Order without Modifying the actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// Show that the Array is still in its Original Order 
console.log("Still in Original Order:", countriesToVisit);
// Print the Array in Reversed Order without Modifying the actual List
console.log("Reverse Order:", [...countriesToVisit].reverse());
// Show that the Array is still in its Original Order 
console.log("Still in Original Order:", countriesToVisit);
// We have changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the Array to show that it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// Print the Array to show that it's order has been changed in Alphabetical order now 
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
// We have changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());

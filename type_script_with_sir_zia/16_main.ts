    // Question #16

// Creating a Guest List Array
let guestlist = ["Hanzala", "Rafay", "Haniya", "Hani"]; 

// Making List for those Guest who can't come
let not_present = guestlist [0];

// Print the Name of Guest Who can't come
console.log(not_present, "will not coming");

// Add or remove values from Guest List Array
guestlist.splice(0,1, "Amirr");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner.");

// Adding a New Guest at Starting index of array
guestlist.unshift("Ali");

// Adding a New Guest at Ending index of array
guestlist.push("Zain");

//  Making a variable for storing a middle index of our guest list array 
let middleIndex: number = Math.floor(guestlist.length / 2);

// Adding a New Guest at Middle index of array
guestlist.splice(middleIndex, 0, "Osama");

// Print message of Updated List 
console.log("Updated List of our Guests");

// Sending an Invitation message to our Guests one by one with their Names
guestlist.forEach(oneguest => console.log(`Assalaam u Alaikum ${oneguest}, would you like to dinner with me?`));

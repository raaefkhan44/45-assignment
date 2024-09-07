    // Question #17

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

// Inform that only two Guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

// Sending an Invitation to the last two Guests on the list
console.log("Invitations to the last 2 Guests");
guestlist.forEach(lasttwo => console.log(`luckily ${lasttwo}, you are still invited to dinner`));

// Removing last two Guests from the list    
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist);



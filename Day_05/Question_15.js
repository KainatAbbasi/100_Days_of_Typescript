"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Exercise 14 
// Part A
let guest2 = ['Asiya', 'Fatima', 'Muntaha'];
let cannotAttend = 'Muntaha';
console.log(`${cannotAttend} , cannot attend a dinner`);
// Part b
let newGuest = 'Faria';
guest2[guest2.indexOf(cannotAttend)] = newGuest;
console.log(guest2);
// part C
for (let i of guest2) {
    console.log(`Dear ${i}, you are invited to the dinner.`);
}

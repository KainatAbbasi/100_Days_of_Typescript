// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// from exercise 15
let guest2 :string[] = ['Asiya', 'Fatima', 'Muntaha'];

//========== exercise 16===============
console.log("Hurrah ! I found a bigger dinning table, so lets invite more people .");
// adding more people

let guestAdd : string = "kainat";
guest2.unshift(guestAdd);
console.log(guestAdd);

// part middle guest
let guestMiddle : string = 'Javeria';
let middleIndex = guest2.length/2
guest2.splice(middleIndex, 0 , guestMiddle)
console.log(guest2);

// part 4 append
guest2.push("Zaviyar");
console.log(guest2);

// printing a message to each person through loops
for (let i of guest2)
{
    console.log(`Dear ${i}, you are invited to the dinner.`);
    
}
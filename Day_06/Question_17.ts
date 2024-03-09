// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner/.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest :string[] = [ 'kainat', 'Asiya', 'Javeria', 'Fatima', 'Muntaha', 'Zaviyar' ];
console.log("Due to space shortage , I can invite only can invite only two people for dinner !");

// removing guest from array untill only two names remain in list.
while(guest.length > 2){
    const guestRemove = guest.pop();
    console.log(`Sorry ! ${guestRemove}, you're no longer invited to dinner.`);
}

//printing a message to a guest those are still in list !
for (let i of guest)
{
    console.log(`Dear ${i}, You're still invites to the Dinner`);
}

//   remove the last two guest and print to make sure that list is empty !
guest.pop();
guest.pop();
console.log(`finally ! list is empty ${guest}`);

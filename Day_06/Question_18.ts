// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//  part A :Store the locations in a array
let places :string[] = ['turkey', 'saudi Arabia', 'china', 'palestine', 'london'];
console.log("Original order is :",places);  // print array in original order
// part C : print array in alphabetical order
console.log("Alphabeticall order :", [...places].sort());
// part D : still in its original list
console.log("Original order after sorting :",places);
// part E "Reverse the order of your list."
console.log("Alphabatical order :",[...places].sort().reverse());
// part F "Print the list to show it’s back to its original order."
console.log("Original order after reverse sorting :",places);
// part G "Print the array to show that its order has been changed"
places.reverse();
console.log("Reversed order is :",places);
//part H "reverse alphabetical order. Print the list to show that its order has changed."
places.sort((a , b) => b.localeCompare(a));
console.log("Sort in reverse alphabatical order :",places);


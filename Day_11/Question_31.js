"use strict";
// No Users:make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userList = ["user1", "user2", "user3"];
// Check if the list of users is not empty
if (userList.length > 0) {
    // Remove all usernames from the array
    userList = [];
    // Print the appropriate message
    console.log("All usernames have been removed.");
}
else {
    // Print a message if the list is empty
    console.log("We need to find some users!");
}

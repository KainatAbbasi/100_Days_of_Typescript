// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest :string[] = ['Asiya', 'Fatima', 'Muntaha'];
let message :string = 'You are invited to the dinner. ';
for (const i of guest)  
{
    console.log(`Dear ${i}, ${message}`);    //it will print a name of person with given  message!
}
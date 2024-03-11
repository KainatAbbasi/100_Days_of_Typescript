"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let person_name = 'Kainat';
let person_name2 = 'kainat Akmal';
let person_name3 = 'kainat Abbasi';
if (person_name == person_name2 && person_name == person_name3) {
    console.log("Names are Equal !!");
}
else {
    console.log("Names are not Equal !!");
}
let name_1 = 'Kainat';
let name_2 = 'Kainat';
if (name_1 == name_2) {
    console.log('Names are Equal ');
}
else {
    console.log();
}
// part 2 • Tests using the lower case function
const inputStr = "Hello World";
const result = inputStr.toLowerCase();
if (result === "hello world") {
    console.log("Test passed");
}
else {
    console.log(`Test failed. Expected 'hello world', but got ${result}`);
}
// part 3
let numeralNumber = 20;
let numeralNumber1 = 25;
console.log(numeralNumber == numeralNumber1);
console.log(numeralNumber != numeralNumber1);
console.log(numeralNumber >= numeralNumber1);
console.log(numeralNumber <= numeralNumber1);
console.log(numeralNumber > numeralNumber1);
console.log(numeralNumber < numeralNumber1);
// part 4
console.log(person_name == person_name2 && person_name == person_name3); //by using and operator!
console.log(person_name == person_name2 || person_name == person_name3); //by using or operator!
// part5
let FruitList = ['Apple', 'Mango', 'Banana', 'Peach'];
if (FruitList.includes('Mango')) {
    console.log('Mango is in fruit list');
}
if (!FruitList.includes('Orange')) {
    console.log("Orange is not in fruit list");
}

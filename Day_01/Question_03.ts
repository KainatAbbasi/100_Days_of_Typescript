//Name cases: store a person name in a variable , and then print that person's name in lowercase, uppercase, and titlecase

let name2 : string = "kainat";     // this line store person name
console.log(name2.toLowerCase());        //this method shows name in small letters
console.log(name2.toUpperCase());        // this method shows name in capital letter
console.log(name2.charAt(0).toUpperCase()+name2.slice(1).toLowerCase());     // this method shows first name in capital letter
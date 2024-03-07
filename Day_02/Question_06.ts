// stripping Names: store a person name and include some white space character at the begining and end of the name .use /t and /n at least once print the name once, so the white space around the name is displayed
let person_name : string = '\t \n Kainat \t \n';
console.log(person_name); // this shows name with whitespace
console.log(person_name.trim());  //This shows name without whitespace
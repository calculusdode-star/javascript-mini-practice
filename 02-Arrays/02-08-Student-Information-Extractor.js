const student = [

    "Christian",

    25,

    "Computer Science",

    "Level 400"

];


// 1. Destructure all values into variables

const [name, age, course, level] = student;


// 2. Print each variable

console.log(name);
console.log(age);
console.log(course);
console.log(level);

console.log("");


// 3. Create another array with only one value and use a default value for the second variable

const student2 = [

    "Alice"

];

const [studentName, studentAge = 18] = student2;

console.log(studentName);
console.log(studentAge);

console.log("");


// 4. Use the rest operator to collect the remaining values

const [firstValue, ...remainingValues] = student;

console.log(firstValue);
console.log(remainingValues);
const students = [

    "Alice",

    "Bob",

    "Christian",

    "David"

];


// 1. Display all students using a for loop

for (let i = 0; i < students.length; i++) {

    console.log(students[i]);

}

console.log("");


// 2. Display all students using for...of

for (const student of students) {

    console.log(student);

}

console.log("");


// 3. Display all students using forEach()

students.forEach(function(student) {

    console.log(student);

});

console.log("");


// 4. Print index beside each student's name using forEach()

students.forEach(function(student, index) {

    console.log(`${index}: ${student}`);

});
let myAge = 20;
const user = {

    name: 'Alice',
    age: 23,
    salary : 23000
}

const userWork = {

    title: "Manager",
    Department: "Human Resource"
}

// Both variable are pointing to diferent memory since their primitive values
let newAge = myAge;
newAge = 45;
console.log(`Old age ${myAge}. New age ${newAge}`);
console.log(' ');

// Memory is by heap both user and newUser point to same object
const newUser = user;
newUser.name = "Joshua";
console.log(user);
console.log('');
console.log(newUser);

// userWork and NewUserWork point to different objects in memory because of the spread operator ...
const newUserWork = {
    ...userWork
}
newUserWork.title = "Accountant"
console.log(' ');
console.log(userWork);
console.log(' ');
console.log(newUserWork);
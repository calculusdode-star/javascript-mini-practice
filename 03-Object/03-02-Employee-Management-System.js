// Add a method called introduce() that prints:
// Hello, my name is Alice.
// Add a method called increaseSalary(amount) that increases the salary.
// Increase the salary by 1500.
// Print the updated salary.

const employee = {

    name: "Alice",

    department: "IT",

    salary: 6000

};

// Better to add function within vessel object.
// this just one case scenario 

employee.introduce = function introduce() {

    return `Hello, my name is ${this.name}.`;

};


employee.displaySalary = function displaySalary() {

    return `Current salary: ${this.salary}`;

};

employee.increaseSalary = function increaseSalary(amount) {

    this.salary += amount;

   return `Salary increased by ${amount}.`;

};

console.log(employee);
console.log("");
console.log(employee.introduce());
console.log("");
console.log(employee.displaySalary());
console.log("");
employee.increaseSalary(1500);
console.log("");
console.log(employee.displaySalary());
console.log("");
console.log(employee);
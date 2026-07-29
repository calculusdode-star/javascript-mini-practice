// Print the employee's name.
// Print the department.
// Increase the salary by 1000.
// Add a new property called status with the value "Active".
// Delete the department property.
// Print the final object.


const employee = {

    id: 101,

    name: "Alice",

    department: "IT",

    salary: 6000

};

console.log.apply(employee.name);
console.log("");
console.log(employee.department);
console.log("");
employee.salary += 1000;
employee.status = "Active";
delete employee.department;
console.log(employee)



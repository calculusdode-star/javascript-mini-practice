const employees = [

    {
        name:"Alice",
        department:"IT",
        salary:6000
    },

    {
        name:"Bob",
        department:"Finance",
        salary:7000
    },

    {
        name:"Christian",
        department:"IT",
        salary:8000
    }

];

const nameArray = employees.map(

    employee => {

       return (employee.name)
    }
);

console.log(nameArray);

console.log("");

const personInIT = employees.filter (

    employee => {
        if(employee.department === "IT")
            {
         
           console.log(employee)
        }
    }
);

console.log("")

const totalSalary = employees.reduce(

    (total, employee) => {
      
        return total + employee.salary
     
    },

    0
)

console.log(totalSalary);
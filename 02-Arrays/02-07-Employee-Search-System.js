const employees = [

    {

        id:1,

        name:"Alice",

        department:"IT",

        salary:6000

    },

    {

        id:2,

        name:"Bob",

        department:"Finance",

        salary:7000

    },

    {

        id:3,

        name:"Christian",

        department:"IT",

        salary:8000

    }

];


console.log(

    employees.find(
        employee => {

          return  employee.id === 2
        }
    )
);


console.log(

    employees.findIndex(
        employee => {

          return  employee.name === "Christian";
        }
    )
);

console.log(

    employees.some(
        employee => {

          return  employee.department === "Finance";
        }
    )
);

console.log(

    employees.every(
        employee => {

          return  employee.salary > 5000;
        }
    )
);






// Print all keys using Object.keys().
// Print all values using Object.values().
// Print key-value pairs using Object.entries().
// Calculate the total of all numeric values.
// Calculate the total of all numeric monetary values.



const employee = {

    id:101,

    name:"Alice",

    department:"IT",

    salary:6000,

    active:true,

    bonus:2000

};


Object.keys(employee).forEach(

    key => {

        console.log(key);
    }
)
    

console.log("");


Object.values(employee).forEach(
    value => {
        console.log(value);
    }
)

console.log("");

Object.entries(employee).forEach(
    ([key, value]) => {
        console.log(`${key}:${value}`)
    }
)


let total = 0;

for (const key in employee){

    if(typeof employee[key] === 'number' && key !== 'id'){

        total += employee[key]
    }
}

let numericTotal = 0;

for (const key in employee){

    if(typeof employee[key] === 'number'){

        numericTotal += employee[key]
    }
}

console.log("");

console.log(total);

console.log("");

console.log(numericTotal);
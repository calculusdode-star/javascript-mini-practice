// Loop through all properties.
// Display:
// Property: name
// Value: MT Atlantic

// Property: cargo
// Value: 5000

// Count how many properties the vessel has.
// Find all numeric values.
// Calculate total numeric data.

const vessel = {

    name:"MT Atlantic",

    cargo:5000,

    status:"Loading",

    destination:"Tema Port",

    crew:25

};

for( const key in vessel){

    console.log(

    `
    Property: ${key}
    Value: ${vessel[key]} `

    )
}

console.log("");
const propertyCount = Object.keys(vessel).length
console.log(propertyCount);

let numericTotal = 0;

for (const key in vessel){

    if(typeof vessel[key] === 'number'){

        numericTotal += vessel[key]
    }
}

console.log("");
console.log(numericTotal);


console.log("");
console.log("Numeric values are:")
for (const key in vessel){
    
    if(typeof vessel[key] === 'number'){

        console.log(

            `${key}: ${vessel[key]}`
        )
    }
}
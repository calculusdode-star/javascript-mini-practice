// Convert object to JSON.
// Display JSON.
// Convert JSON back to object.
// Display:


const vessel = {

    name:"MT Atlantic",

    cargo:5000,

    status:"Loading"

};


const stringObject = JSON.stringify(vessel);
console.log(stringObject);

console.log(JSON.parse(stringObject));
// Destructure:
// name
// cargo
// status
// Display:
// Vessel: MT Atlantic

// Cargo: 5000

// Status: Loading


const vessel = {

    name:"MT Atlantic",

    cargo:5000,

    status:"Loading"

};

const {

    name,

    cargo,

    status
    
} = vessel;

console.log(
    `
    Vessel: ${name}

    Cargo: ${cargo}

    Status: ${status}
    `)
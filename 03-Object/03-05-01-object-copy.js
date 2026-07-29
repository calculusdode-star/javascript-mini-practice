

// Create a copy using spread.
// Change cargo in the copy.
// Print both objects.

const vessel = {

    name:"MT Atlantic",

    cargo:5000

};

const newVessel = {

    ...vessel,

    cargo: 7000
}

console.log(vessel);
console.log('');
console.log(newVessel);
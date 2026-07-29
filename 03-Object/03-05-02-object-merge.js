const vessel = {

    name:"MT Atlantic"

};


const operation = {

    cargo:"Crude Oil",

    quantity:5000

};

const vesselOperation = {

    ...vessel,

    ...operation
}

console.log(vessel);
console.log('');
console.log(operation);
console.log('');
console.log(vesselOperation);
console.log('');
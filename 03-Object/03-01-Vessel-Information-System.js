// Print the vessel name.
// Print the cargo type.
// Change the status to "Completed".
// Add a property called destination with the value "Tema Port".
// Delete the quantity property.
// Print the final object.

const vessel = {

    id: 201,

    name: "MT Atlantic",

    cargo: "Crude Oil",

    quantity: 5000,

    status: "Loading"
};

console.log(vessel.name);
console.log("");
console.log(vessel.cargo);
vessel.status = 'Completed';
vessel.destination = "Tema Port";
delete vessel.quantity;
console.log("");
console.log(vessel);


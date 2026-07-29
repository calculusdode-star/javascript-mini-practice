const vessel = {

    name: "MT Atlantic",

    cargo: 5000,

    status: "Loading"

};


// Better to add function within vessel object.
// this just one case scenario 

vessel.load = function load(amount) {

    this.cargo += amount;

    console.log(`${amount} tonnes loaded.`);

};



vessel.unload = function unload(amount) {

    this.cargo -= amount;

    console.log(`${amount} tonnes unloaded.`);

};



vessel.showDetails = function showDetails() {

    console.log(`Vessel Name: ${this.name}`);

    console.log(`Cargo: ${this.cargo} tonnes`);

    console.log(`Status: ${this.status}`);

};




vessel.showDetails();

console.log("");

vessel.load(2000);

console.log("");

vessel.unload(1000);

console.log("");

vessel.showDetails();

console.log(vessel);
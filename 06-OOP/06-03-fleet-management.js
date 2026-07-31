function Vessel(name, imo, cargo) {

    this.name = name;

    this.imo = imo;

    this.cargo = cargo;

}


Vessel.prototype.depart = function() {

    console.log(`${this.name} has departed.`);
};


Vessel.prototype.dock = function() {

    console.log(`${this.name} has docked.`);
};


Vessel.prototype.displayInfo = function() {

    console.log(`Vessel Name: ${this.name}`);

    console.log(`IMO Number: ${this.imo}`);

    console.log(`Cargo: ${this.cargo}`);

    console.log("--------------------------");
};


const vessel1 = new Vessel(

    "MT Atlantic",

    "9387421",

    "Crude Oil"

);


const vessel2 = new Vessel(

    "MT Horizon",

    "9274618",

    "Diesel"

);


const vessel3 = new Vessel(

    "MT Pacific",

    "9145783",

    "Petrol"

);


const vessel4 = new Vessel(

    "MT Neptune",

    "9032567",

    "Jet Fuel"

);


const vessel5 = new Vessel(

    "MT Discovery",

    "8967432",

    "LNG"

);


vessel1.displayInfo();
vessel1.depart();

console.log("");

vessel2.displayInfo();
vessel2.dock();

console.log("");

vessel3.displayInfo();

console.log("");

vessel4.displayInfo();

console.log("");

vessel5.displayInfo();
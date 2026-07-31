/*
Prototype Chain Diagram

               Object
                  ▲
                  │
          Vehicle.prototype
                  ▲
                  │
          Vessel.prototype
                  ▲
                  │
          Tanker.prototype
                  ▲
                  │
             tanker1
*/


// Parent Constructor
function Vehicle(name) {

    this.name = name;

}


// Shared method
Vehicle.prototype.move = function() {

    console.log(`${this.name} is moving.`);

};


// Child Constructor
function Vessel(name, imo) {

    this.name = name;

    this.imo = imo;

}


// Inherit from Vehicle
Vessel.prototype = Object.create(Vehicle.prototype);

Vessel.prototype.constructor = Vessel;


// Vessel method
Vessel.prototype.dock = function() {

    console.log(`${this.name} has docked.`);

};


// Grandchild Constructor
function Tanker(name, imo, cargo) {

    this.name = name;

    this.imo = imo;

    this.cargo = cargo;

}


// Inherit from Vessel
Tanker.prototype = Object.create(Vessel.prototype);

Tanker.prototype.constructor = Tanker;


// Tanker method
Tanker.prototype.loadCargo = function() {

    console.log(`${this.name} loaded ${this.cargo}.`);

};


// Create object
const tanker1 = new Tanker(

    "MT Atlantic",

    "9387421",

    "Crude Oil"

);


// Test methods
tanker1.move();

tanker1.dock();

tanker1.loadCargo();
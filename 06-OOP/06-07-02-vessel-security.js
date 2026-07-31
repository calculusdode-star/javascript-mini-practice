class Vessel {

    constructor(name, fuel) {

        this.name = name;

        this.fuel = fuel;

    }


    refuel(amount) {

        this.fuel += amount;

        console.log(`${this.name} refueled. Fuel level: ${this.fuel}%`);

    }


    consumeFuel(amount) {

        if (amount > this.fuel) {

            console.log("Not enough fuel available.");

            return;

        }


        this.fuel -= amount;

        console.log(`${this.name} consumed fuel. Fuel level: ${this.fuel}%`);

    }


    status() {

        console.log(`Vessel: ${this.name}`);

        console.log(`Fuel: ${this.fuel}%`);

    }

}



const vessel1 = new Vessel(

    "MT Atlantic",

    80

);


vessel1.status();

console.log("");

vessel1.consumeFuel(30);

console.log("");

vessel1.refuel(20);

console.log("");

vessel1.consumeFuel(100);

console.log("");

vessel1.status();
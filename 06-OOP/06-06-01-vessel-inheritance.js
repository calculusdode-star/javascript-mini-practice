class Vessel {

    constructor(name) {

        this.name = name;

    }

    depart() {

        console.log(`${this.name} has departed.`);

    }

}


class Tanker extends Vessel {

    constructor(name, cargo) {

        super(name);

        this.cargo = cargo;

    }

    loadCargo() {

        console.log(`${this.name} loaded ${this.cargo}.`);

    }

}


const tanker1 = new Tanker(

    "MT Atlantic",

    "Crude Oil"

);

const tanker2 = new Tanker(

    "MT Horizon",

    "Diesel"

);


tanker1.depart();

tanker1.loadCargo();

console.log("");

tanker2.depart();

tanker2.loadCargo();
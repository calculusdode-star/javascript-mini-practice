const vessel = {

    name: "MT Atlantic",

    speed: 12,

    cargo: 5000,

    status: "Loading",

    loadCargo(amount) {

        this.cargo += amount;

        console.log(`Cargo loaded. Total cargo: ${this.cargo} MT`);

    },

    changeSpeed(newSpeed) {

        this.speed = newSpeed;

        console.log(`Vessel speed changed to ${this.speed} knots`);

    }

};


const captain = {

    name: "Captain John",

    nationality: "Ghana",

    experience: 20,

    sendReport() {

        console.log(`Captain ${this.name} sent the vessel report.`);

    }

};


const cargo = {

    type: "Crude Oil",

    quantity: 5000,

    status: "Loading",

    updateStatus(newStatus) {

        this.status = newStatus;

        console.log(`Cargo status: ${this.status}`);

    }

};


const port = {

    name: "Tema Port",

    country: "Ghana",

    ships: 25,

    receiveVessel(vesselName) {

        console.log(`${vesselName} has arrived at ${this.name}`);

    }

};


// Testing methods

vessel.loadCargo(2000);

vessel.changeSpeed(15);

captain.sendReport();

cargo.updateStatus("Loaded");

port.receiveVessel(vessel.name);
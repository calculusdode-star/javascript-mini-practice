class Vessel {

    #fuel;
    #engineRunning;

    constructor(name, fuel) {

        this.name = name;

        this.#fuel = fuel;

        this.#engineRunning = false;

    }

    startEngine() {

        if (this.#fuel <= 0) {

            console.log(
                "Cannot start engine: no fuel."
            );

            return;

        }

        this.#engineRunning = true;

        console.log("Engine started.");

    }

    stopEngine() {

        this.#engineRunning = false;

        console.log("Engine stopped.");

    }

    consumeFuel(amount) {

        if (amount > this.#fuel) {

            console.log(
                "Insufficient fuel."
            );

            return;

        }

        this.#fuel -= amount;

    }

}

const vessel = new Vessel (

    "MT HORIZON",
    2000
);

vessel.startEngine();
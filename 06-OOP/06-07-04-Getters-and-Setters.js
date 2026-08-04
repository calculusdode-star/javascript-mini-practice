class Tanker {

    #fuel;

    constructor(name, fuel) {

        this.name = name;

        this.#fuel = fuel;

    }

    get fuel() {

        return this.#fuel;

    }

    set fuel(amount) {

        if (typeof amount !== "number") {

            console.log(
                "Fuel must be a number."
            );

            return;

        }

        if (amount < 0) {

            console.log(
                "Fuel cannot be negative."
            );

            return;

        }

        if (amount > 100000) {

            console.log(
                "Fuel exceeds capacity."
            );

            return;

        }

        this.#fuel = amount;

    }

    refuel(amount) {

        this.fuel = this.#fuel + amount;

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


const tanker =
new Tanker(
    "MT Atlantic",
    50000
);

console.log(tanker.fuel);

tanker.refuel(10000);

console.log(tanker.fuel);

tanker.consumeFuel(5000);

console.log(tanker.fuel);
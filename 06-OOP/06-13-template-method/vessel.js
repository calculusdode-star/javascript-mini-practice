class Vessel {

    prepare() {

        this.checkSystems();

        this.startEngine();

        this.prepareMission();

        this.depart();

    }

    checkSystems() {

        console.log(
            "Checking vessel systems..."
        );

    }

    startEngine() {

        console.log(
            "Engine started."
        );

    }

    prepareMission() {

        throw new Error(
            "prepareMission() must be implemented."
        );

    }

    depart() {

        console.log(
            "Vessel departing."
        );

    }

}

export default Vessel;
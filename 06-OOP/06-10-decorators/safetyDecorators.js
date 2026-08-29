class SafetyDecorator {

    constructor(vessel) {

        this.vessel = vessel;

    }

    start() {

        console.log(
            "Safety checks complete."
        );

        this.vessel.start();

    }

}

export default SafetyDecorator;
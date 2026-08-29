class LoggingDecorator {

    constructor(vessel) {

        this.vessel = vessel;

    }

    start() {

        console.log(
            "LOG: Vessel starting..."
        );

        this.vessel.start();

    }

}

export default LoggingDecorator;
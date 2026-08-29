class StartVesselCommand {

    constructor(vessel) {

        this.vessel = vessel;

    }

    execute() {

        this.vessel.start();

    }

}

export default StartVesselCommand;
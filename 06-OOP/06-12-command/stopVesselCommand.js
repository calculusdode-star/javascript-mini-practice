class StopVesselCommand {

    constructor(vessel) {

        this.vessel = vessel;

    }

    execute() {

        this.vessel.stop();

    }

}

export default StopVesselCommand;
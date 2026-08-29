import Vessel from "./vessel.js";

import StartVesselCommand
    from "./startVesselCommand.js";

import StopVesselCommand
    from "./stopVesselCommand.js";


const vessel = new Vessel();

const startCommand =
    new StartVesselCommand(vessel);

const stopCommand =
    new StopVesselCommand(vessel);


const commands = [
    startCommand,
    stopCommand
];

for (const command of commands) {

    command.execute();

}
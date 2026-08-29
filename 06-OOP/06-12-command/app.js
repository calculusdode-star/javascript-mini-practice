import Vessel from "./vessel.js";

import StartVesselCommand
    from "./startVesselCommand.js";

import StopVesselCommand
    from "./stopVesselCommand.js";

import CommandInvoker
    from "./commandInvoker.js";


const vessel = new Vessel();

const startCommand =
    new StartVesselCommand(vessel);

const stopCommand =
    new StopVesselCommand(vessel);


const invoker =
    new CommandInvoker();


invoker.add(startCommand);

invoker.add(stopCommand);


invoker.executeAll();
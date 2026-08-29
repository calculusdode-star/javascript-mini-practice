import Vessel from "./vessel.js";
import LoggingDecorator
    from "./loggingDecorator.js";


const vessel = new Vessel();

const loggedVessel =
    new LoggingDecorator(vessel);

loggedVessel.start();
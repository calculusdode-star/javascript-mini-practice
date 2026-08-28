import Vessel from "./vessel.js";
import Dashboard from "./dashboard.js";
import Logger from "./logger.js";

const vessel = new Vessel();

const dashboard = new Dashboard();

const logger = new Logger();

vessel.subscribe(dashboard);

vessel.subscribe(logger);

vessel.setStatus("at sea");
import EventBus from "./eventBus.js";
import Vessel from "./vessel.js";

import dashboard
    from "./dashBoard.js";

import logger
    from "./logger.js";


const eventBus = new EventBus();

const vessel =
    new Vessel(eventBus);


eventBus.subscribe(
    "vessel-status-changed",
    dashboard
);

eventBus.subscribe(
    "vessel-status-changed",
    logger
);


vessel.setStatus("at sea");
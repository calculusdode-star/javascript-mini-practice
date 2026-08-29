import Vessel from "./vessel.js";
import VesselHistory from "./vesselHistory.js";


const vessel =
    new Vessel(
        "MV Atlantic",
        12,
        "Takoradi"
    );


const history =
    new VesselHistory();


// Original state
vessel.showStatus();


// Save original state
history.save(
    vessel.save()
);


// Change vessel
vessel.speed = 20;

vessel.destination = "Tema";


console.log("\nAfter changes:");

vessel.showStatus();


// Undo
const previousState =
    history.undo();

vessel.restore(previousState);


console.log("\nAfter undo:");

vessel.showStatus();
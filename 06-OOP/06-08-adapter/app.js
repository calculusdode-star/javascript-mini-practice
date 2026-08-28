import Vessel from "./vessel.js";
import ModernEngine from "./modernEngine.js";
import OldEngine from "./oldEngine.js";
import EngineAdapter from "./engineAdapter.js";

const engine =
    new ModernEngine();

const vessel =
    new Vessel(engine);

const modernEngineStart = vessel.start();
console.log(modernEngineStart);


const oldEngine =
    new OldEngine();

const adapter =
    new EngineAdapter(oldEngine);

const oldVessel =
    new Vessel(adapter);

const oldEngineStart = oldVessel.start();
console.log(oldEngineStart);

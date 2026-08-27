import Vessel from "./vessel.js";
import Engine from "./engine.js";
import Navigation from "./navigation.js";
import Cargo from "./cargo.js";


const engine = new Engine();
const navigation = new Navigation();
const cargo = new Cargo();

const vessel = new Vessel(

    engine,
    navigation,
    cargo
);

console.log(vessel)

vessel.engine.start();

 vessel.navigation.setDestination(
     "Takoradi"
 );

 vessel.cargo.load(80000);

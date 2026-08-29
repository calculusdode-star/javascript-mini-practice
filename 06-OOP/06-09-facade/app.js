import Engine from "./engine.js";
import Navigation from "./navigation.js";
import Cargo from "./cargo.js";
import Fuel from "./fuel.js";
import Anchor from "./anchor.js";

import VesselFacade from "./vesselFacade.js";


const engine = new Engine();

const navigation = new Navigation();

const cargo = new Cargo();

const fuel = new Fuel();

const anchor = new Anchor();


const vessel = new VesselFacade(
    engine,
    navigation,
    cargo,
    fuel,
    anchor
);


vessel.start();
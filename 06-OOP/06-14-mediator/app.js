import VesselMediator
    from "./vesselMediator.js";

import Engine
    from "./engine.js";

import Navigation
    from "./navigation.js";

import Cargo
    from "./cargo.js";


const mediator =
    new VesselMediator();


const engine =
    new Engine(mediator);

const navigation =
    new Navigation(mediator);

const cargo =
    new Cargo(mediator);


engine.start();

navigation.activate();

cargo.prepare();
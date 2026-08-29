import SecurityHandler
    from "./securityHandler.js";

import EngineHandler
    from "./engineHandler.js";

import CargoHandler
    from "./cargoHandler.js";

import NavigationHandler
    from "./navigationHandler.js";


const security =
    new SecurityHandler();

const engine =
    new EngineHandler();

const cargo =
    new CargoHandler();

const navigation =
    new NavigationHandler();


security
    .setNext(engine)
    .setNext(cargo)
    .setNext(navigation);


const request = {

    securityApproved: true,

    engineReady: true,

    cargoReady: true,

    navigationReady: true

};


security.handle(request);
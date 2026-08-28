import LngStrategy from "./lngStrategy.js";
import ContainerStrategy from "./containerStrategy.js";
import CrudeOilStrategy  from "./crudeOilStrategy.js";
import Vessel from "./vessel.js";

const crudeVessel = new Vessel (

       new CrudeOilStrategy()
);

const containerVessel = new Vessel (

    new ContainerStrategy()
);

const lngVessel = new Vessel (

       new LngStrategy()
);


crudeVessel.loadCargo();
containerVessel.loadCargo();
lngVessel.loadCargo();
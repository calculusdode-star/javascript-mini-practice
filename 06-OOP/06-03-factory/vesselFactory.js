import Tanker from "./tanker.js";
import ContainerShip from "./containerShip.js";
import TugBoat from "./tugBoat.js";

class VesselFactory {

    static create(type){

         switch (type) {

            case "tanker":
                return new Tanker();

            case "container":
                return new ContainerShip();

            case "tug":
                return new TugBoat();

            default:
                throw new Error(
                    `Unknown vessel type: ${type}`
                );

        }
    }
}

export default VesselFactory
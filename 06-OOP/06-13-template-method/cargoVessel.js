import Vessel from "./vessel.js";

class CargoVessel extends Vessel {

    prepareMission() {

        console.log(
            "Loading cargo..."
        );

    }

}

export default CargoVessel;
import Vessel from "./vessel.js";

class ResearchVessel extends Vessel {

    prepareMission() {

        console.log(
            "Preparing research equipment..."
        );

    }

}

export default ResearchVessel;
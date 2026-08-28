import DockedState from "./dockedStates.js";

class Vessel {

    constructor() {

        this.state =
            new DockedState();

    }

    setState(state) {

        this.state = state;

    }

    operate() {

        this.state.operate(this);

    }

}

export default Vessel;
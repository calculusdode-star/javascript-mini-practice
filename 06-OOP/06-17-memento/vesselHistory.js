class VesselHistory {

    constructor() {

        this.history = [];

    }

    save(memento) {

        this.history.push(memento);

    }

    undo() {

        return this.history.pop();

    }

}

export default VesselHistory;
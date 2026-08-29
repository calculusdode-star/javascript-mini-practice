class Vessel {

    constructor(name, speed, destination) {

        this.name = name;
        this.speed = speed;
        this.destination = destination;

    }

    showStatus() {

        console.log({
            name: this.name,
            speed: this.speed,
            destination: this.destination
        });

    }

      save() {

        return new VesselMemento({

            name: this.name,
            speed: this.speed,
            destination: this.destination

        });

    }

    restore(memento) {

        this.name = memento.state.name;

        this.speed = memento.state.speed;

        this.destination =
            memento.state.destination;

    }


}

export default Vessel;
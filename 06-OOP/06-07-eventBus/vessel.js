class Vessel {

    constructor(eventBus) {

        this.eventBus = eventBus;

        this.status = "docked";

    }

    setStatus(status) {

        this.status = status;

        this.eventBus.publish(
            "vessel-status-changed",
            this
        );

    }

}

export default Vessel;
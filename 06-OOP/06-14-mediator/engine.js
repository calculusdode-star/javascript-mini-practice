class Engine {

    constructor(mediator) {

        this.mediator = mediator;

    }

    start() {

        console.log(
            "Engine started."
        );

        this.mediator.notify(
            "Engine",
            "started"
        );

    }

}

export default Engine;
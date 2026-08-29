class Cargo {

    constructor(mediator) {

        this.mediator = mediator;

    }

    prepare() {

        console.log(
            "Cargo prepared."
        );

        this.mediator.notify(
            "Cargo",
            "prepared"
        );

    }

}

export default Cargo;
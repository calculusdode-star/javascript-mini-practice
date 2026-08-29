class Navigation {

    constructor(mediator) {

        this.mediator = mediator;

    }

    activate() {

        console.log(
            "Navigation activated."
        );

        this.mediator.notify(
            "Navigation",
            "activated"
        );

    }

}

export default Navigation;

class VesselFacade {

    constructor(
        engine,
        navigation,
        cargo,
        fuel,
        anchor
    ) {

        this.engine = engine;
        this.navigation = navigation;
        this.cargo = cargo;
        this.fuel = fuel;
        this.anchor = anchor;

    }

    start() {

        this.engine.check();
        this.fuel.check();
        this.cargo.check();

        this.navigation.check();

        this.engine.start();
        this.navigation.start();

        this.anchor.release();

        console.log(
            "Vessel is ready to depart."
        );

    }

}

export default VesselFacade;
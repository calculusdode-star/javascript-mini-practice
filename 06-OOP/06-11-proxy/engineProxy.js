class EngineProxy {

    constructor(engine, role) {

        this.engine = engine;
        this.role = role;

    }

    start() {

        this.engine.start();

    }

    shutdown() {

        if (this.role !== "captain") {

            console.log(
                "Access denied."
            );

            return;

        }

        this.engine.shutdown();

    }

}

export default EngineProxy;
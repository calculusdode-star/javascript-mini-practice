class EngineAdapter {

    constructor(oldEngine) {

        this.oldEngine = oldEngine;

    }

    start() {

        this.oldEngine.ignite();

    }

}

export default EngineAdapter;
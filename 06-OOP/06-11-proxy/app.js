import Engine from "./engine.js";
import EngineProxy from "./engineProxy.js";

const engine = new Engine();

const captainEngine =
    new EngineProxy(
        engine,
        "captain"
    );

captainEngine.start();

captainEngine.shutdown();
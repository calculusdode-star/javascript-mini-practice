import Handler from "./handler.js";

class EngineHandler extends Handler {

    handle(request) {

        if (!request.engineReady) {

            console.log(
                "Engine check failed."
            );

            return false;

        }

        console.log(
            "Engine check passed."
        );

        return super.handle(request);

    }

}

export default EngineHandler;
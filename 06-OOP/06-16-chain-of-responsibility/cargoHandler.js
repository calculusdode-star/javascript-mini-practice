import Handler from "./handler.js";

class CargoHandler extends Handler {

    handle(request) {

        if (!request.cargoReady) {

            console.log(
                "Cargo check failed."
            );

            return false;

        }

        console.log(
            "Cargo check passed."
        );

        return super.handle(request);

    }

}

export default CargoHandler;
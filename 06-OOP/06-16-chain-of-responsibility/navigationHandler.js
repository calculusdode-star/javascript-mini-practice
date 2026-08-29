import Handler from "./handler.js";

class NavigationHandler extends Handler {

    handle(request) {

        if (!request.navigationReady) {

            console.log(
                "Navigation check failed."
            );

            return false;

        }

        console.log(
            "Navigation check passed."
        );

        console.log(
            "Vessel approved for departure."
        );

        return true;

    }

}

export default NavigationHandler;
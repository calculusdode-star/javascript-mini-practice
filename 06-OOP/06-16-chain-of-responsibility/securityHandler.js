import Handler from "./handler.js";

class SecurityHandler extends Handler {

    handle(request) {

        if (!request.securityApproved) {

            console.log(
                "Security check failed."
            );

            return false;

        }

        console.log(
            "Security check passed."
        );

        return super.handle(request);

    }

}

export default SecurityHandler;
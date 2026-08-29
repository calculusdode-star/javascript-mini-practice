class Handler {

    constructor() {

        this.nextHandler = null;

    }

    setNext(handler) {

        this.nextHandler = handler;

        return handler;

    }

    handle(request) {

        if (this.nextHandler) {

            return this.nextHandler.handle(request);

        }

    }

}

export default Handler;
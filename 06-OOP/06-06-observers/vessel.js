class Vessel {

    constructor(){

        this.status = "docked"
        this.observers = []
    }

    subscribe(observer) {

        this.observers.push(observer);

    }

    unsubscribe(observer) {

        this.observers =
            this.observers.filter(
                item => item !== observer
            );

    }

    notify() {

        this.observers.forEach(
            observer => observer.update(this)
        );

    }

     setStatus(status) {

        this.status = status;

        this.notify();

    }
}

export default Vessel
class EventBus {

    constructor() {

        this.events = {};

    }

    subscribe(eventName, listener) {

    if (!this.events[eventName]) {

        this.events[eventName] = [];

    }

    this.events[eventName].push(listener);

}

publish(eventName, data) {

    const listeners =
        this.events[eventName];

    if (!listeners) {
        return;
    }

    listeners.forEach(
        listener => listener(data)
    );

}

}

export default EventBus;
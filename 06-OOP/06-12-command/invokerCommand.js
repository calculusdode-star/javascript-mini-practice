class CommandInvoker {

    constructor() {

        this.commands = [];

    }

    add(command) {

        this.commands.push(command);

    }

    executeAll() {

        for (const command of this.commands) {

            command.execute();

        }

    }

}

export default CommandInvoker;
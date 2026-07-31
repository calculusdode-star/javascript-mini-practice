class Employee {

    constructor(name) {

        this.name = name;

    }

    work() {

        console.log(`${this.name} is working.`);

    }

}


class Manager extends Employee {

    constructor(name) {

        super(name);

    }

    work() {

        console.log(`${this.name} is managing the team.`);

    }

}


const employee1 = new Employee("Alice");

const manager1 = new Manager("David");


employee1.work();

manager1.work();
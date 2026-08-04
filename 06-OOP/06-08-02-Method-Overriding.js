class Vessel {

    constructor(name) {

        this.name = name;

    }

    startEngine() {

        console.log(`${this.name} is starting enigne`);

    }

    stopEngine() {

        console.log(`${this.name} is stopping engine`);

    }

}


class Tanker extends Vessel {

       startEngine() {

        super.startEngine();
        console.log(this.name,"engine is running");

    }

}

class Tugboat extends Vessel {

     
    startEngine() {

         super.startEngine();
         console.log(this.name,"engine is running");
    }

}

const tanker =
    new Tanker("MT Atlantic");

const tugboat =
    new Tugboat("Harbour Tug 01");

tanker.startEngine();

console.log("");

tugboat.startEngine();
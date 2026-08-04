class Tanker {

    startEngine() {

        // ...
        console.log("Starting Tanker Engine")

    }

}

class ContainerShip {

    startEngine() {

        // ...
       console.log("Starting ContainerShip Engine")
    }

}

class Tugboat {

    startEngine() {

        // ...
        console.log("Starting tugboat Engine")
    }

}


function startVessel(vessel){

    vessel.startEngine();
}

const tanker = new Tanker();
const containerShip = new ContainerShip();
const tugboat = new Tugboat();

startVessel(tanker);
startVessel(containerShip);
startVessel(tugboat);
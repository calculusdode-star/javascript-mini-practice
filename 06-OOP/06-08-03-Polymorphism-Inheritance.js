class Vessel {

    constructor(name) {

        this.name = name;

    }

    operate() {

        console.log(
            `${this.name}: Standard vessel operation`
        );

    
    }

    startEngine(){

        console.log(`${this.name} is starting engine.`);
    }    

    

}

class Tanker extends Vessel{
   
    operate(){

        super.operate();
        console.log(`${this.name}: crude oil onloading has commenced.`)
    }


};


class FPSO extends Vessel{

     operate(){

        super.operate();
        console.log(`${this.name}: crude oil drilling has commenced.`)
    }

};

class TugBoat extends Vessel{

   operate(){

        super.operate();
        console.log(`${this.name}: manuveuring has commenced.`)
    }
    
};

class ContainerShip extends Vessel{

    operate(){

        super.operate();
        console.log(`${this.name}: cargo loading has commenced.`)
    }
}



const fleet = [

    new Tanker("MT Atlantic"),

    new ContainerShip("MV Pacific"),

    new TugBoat("Harbour Tug 01"),

    new FPSO("FPSO Alpha")

];


 for (const vessel of fleet) {

     vessel.operate();
     vessel.startEngine();
     console.log("")
 
}


function prepareVessel(vessel) {

    vessel.startEngine();

    vessel.operate();

};


 console.log("");


fleet.forEach((vessel) => {
    prepareVessel(vessel);
    console.log('')
});
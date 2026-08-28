
class Vessel {

   constructor(cargoStrategy){

        this.cargoStrategy = cargoStrategy;
   }

   loadCargo(){

        this.cargoStrategy.load();
   }

}

export default Vessel;
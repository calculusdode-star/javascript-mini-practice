class Vehicle{

    move(){

        console.log("Moving");

    }

}

const car1 = new Vehicle();

const car2 = new Vehicle();

console.log(car1.move === car2.move);
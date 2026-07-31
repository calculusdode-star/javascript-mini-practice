function Vehicle(brand, speed){

    this.brand = brand;
    this.speed = speed;

    Vehicle.prototype.accelerate = function(increase){

        this.speed += increase;
        return `You are driving at ${this.speed} kilometres per hour`
    },

   Vehicle.prototype.decelerate = function(decrease){

        this.speed -= decrease;
        return `You are driving at ${this.speed} kilometres per hour`
    }
}

const mitsubishi = new Vehicle("mitsubishiX", 75);
console.log(mitsubishi)
console.log(mitsubishi.accelerate(90));
console.log(mitsubishi.decelerate(50));

const toyota = new Vehicle("Voxy", 45);

if (
    
    Object.getPrototypeOf(toyota) === Object.getPrototypeOf(mitsubishi)

){

    console.log("True")
}

else {

    console.log("False")
}
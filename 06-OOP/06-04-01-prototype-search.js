function Animal(){

    Animal.prototype.sound = function(){

        console.log("Make some sound")

    }
}

const dog = new Animal();

dog.sound();
function Vessel(name){

    this.name = name;

}

const ship = new Vessel("MT Horizon");

console.log(ship);

console.log(ship.constructor);

console.log(
    ship instanceof Vessel
);
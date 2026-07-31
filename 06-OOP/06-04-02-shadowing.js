function Ship(){

}

Ship.prototype.country = "Ghana";

const ship = new Ship();


console.log(ship.country);

// object property always overshadow prototype

ship.country = "Panama";

console.log(ship.country);
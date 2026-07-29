const cargoQueue = [];

cargoQueue.push('MT Ocean Vanguard')

console.log(cargoQueue);

cargoQueue.push(
    
        "MT Atlantic Horizon",
        "MT Emerald Voyager",
        "MT Blue Odyssey",
        "MT Pacific Guardian",
        "MT Crimson Tide",
        "MT Golden Mariner",
        "MT Silver Crest"
    
)

console.log(cargoQueue);
console.log(cargoQueue.length);


cargoQueue.pop()
console.log('')

console.log(cargoQueue);
console.log(cargoQueue.length);
console.log('')

cargoQueue.unshift("MT Silver Crest");
console.log(cargoQueue);
console.log(cargoQueue.length);
console.log('')

cargoQueue.shift();
cargoQueue.shift();
console.log(cargoQueue);
console.log(cargoQueue.length);
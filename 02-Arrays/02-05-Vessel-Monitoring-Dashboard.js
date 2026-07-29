const vessels = [

    "MT Atlantic",

    "MT Horizon",

    "MT Pacific",

    "MT Discovery"

];

for (let i = 0; i < vessels.length; i++) {

    console.log(`${i}: ${vessels[i]}`);
    

}

console.log(" ");

for (const vessel of vessels) {

    console.log(`Monitoring: ${vessel}`);

}
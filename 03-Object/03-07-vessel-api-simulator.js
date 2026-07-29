const vessel = {

    name: "MT Atlantic",

    cargo: 5000,

    port: "Tema",

    status: "Loading"

};


// 1. Convert object to JSON

const vesselJSON = JSON.stringify(vessel);


// 2. Pretend to send it

console.log("Sending vessel data...");

console.log(vesselJSON);

console.log("");


// 3. Pretend to receive JSON response

const receivedJSON = vesselJSON;


// 4. Convert JSON back to object

const receivedVessel = JSON.parse(receivedJSON);


// 5. Object destructuring

const {

    name,

    cargo,

    port,

    status

} = receivedVessel;


// 6. Generate report using template literals

const report = `

----- Vessel Report -----

Vessel Name: ${name}

Cargo: ${cargo} tonnes

Port: ${port}

Status: ${status}

-------------------------

`;


// Display report

console.log(report);
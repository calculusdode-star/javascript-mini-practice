const vessel = {

    name:"MT Atlantic",

    location:{

        port:"Tema",

        country:"Ghana"

    }

};

const updatedVessel = {

    ...vessel,

    location: {

        ...vessel.location,

        port: 'Takoradi'
    }
}

console.log(updatedVessel);
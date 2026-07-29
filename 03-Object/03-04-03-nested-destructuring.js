const operation = {

    vessel:"MT Atlantic",

    location:{

        port:"Tema",

        country:"Ghana"

    }

};

const {

    vessel,

    location: {
        port,

        country
    }
} = operation;

console.log(

    `
    Vessel: ${vessel}
    
    Port: ${port}
    
    Country: ${country}`
)
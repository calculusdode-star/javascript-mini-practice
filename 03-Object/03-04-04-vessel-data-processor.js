// Vessel: MT Atlantic

// Type: Tanker

// Cargo: Crude Oil

// Quantity: 5000

// Route:

// Tema → Takoradi



const vesselOperation = {

    vessel:{

        name:"MT Atlantic",

        type:"Tanker"

    },

    cargo:{

        product:"Crude Oil",

        quantity:5000

    },

    ports:[

        "Tema",

        "Takoradi"

    ]

};

const {

    vessel: {

        name,

        type
    },

    cargo: {

        product,

        quantity
    },

    ports: [

        first,

        second
    ]


} = vesselOperation;


console.log(`
    Vessel: ${name}

    Type: ${type}

    Cargo: ${product}

    Quantity: ${quantity}

    Route:

    ${first} -> ${second}
    `)
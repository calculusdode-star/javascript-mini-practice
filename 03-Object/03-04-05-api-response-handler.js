// success

// user id

// user name

// first skill

// second skill


const apiResponse = {

    success:true,

    data:{

        user:{

            id:101,

            name:"Christian",

            skills:[

                "JavaScript",

                "Python",

                "SQL"

            ]

        }

    }

};


const {

    success,

    data: {

        user: {

            id,

            name,

            skills: [

                first,

                second,

                third
            ]
        },


    }
} = apiResponse;

console.log(
    `
    ${success}
    
    ${id}
    
    ${name}
    
    ${first}
    
    ${second} `)
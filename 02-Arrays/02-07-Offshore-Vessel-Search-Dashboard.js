const vessels = [

    {

        id:101,

        name:"MT Atlantic",

        status:"Loading"

    },

    {

        id:102,

        name:"MT Horizon",

        status:"Completed"

    },

    {

        id:103,

        name:"MT Pacific",

        status:"Loading"

    }

];


console.log(

   vessels.find(
        vessel => {

          return  vessel.name === "MT Horizon";
        }
    )
);


console.log(

    vessels.findIndex(
        vessel=> {

          return  vessel.name === "MT Pacific";
        }
    )
);

console.log(

    vessels.some(
        vessel => {

          return  vessel.status === "Completed";
        }
    )
);

console.log(

   vessels.every(
        vessel => {

          return  vessel.status === "Loading";
        }
    )
);






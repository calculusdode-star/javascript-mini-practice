const operations = [

{
vessel:"MT Atlantic",
cargo:5000,
status:"Completed"
},

{
vessel:"MT Horizon",
cargo:8000,
status:"Loading"
},

{
vessel:"MT Pacific",
cargo:7000,
status:"Completed"
}

];

const vesselName = operations.map(

    operation => {

       return operation.vessel
        
    }
);


const completeOperation = operations.filter(

    operation => {
        if (operation.status === "Completed"){

            return operation
        }
    }
);

const totalCargo = operations.reduce(

    (total, operation) => {

       return total + operation.cargo
    },

    0
)

console.log(vesselName);
console.log("");
console.log(completeOperation);
console.log("");
console.log(totalCargo);
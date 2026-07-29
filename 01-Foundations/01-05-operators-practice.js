// Fuel Inventory System using Command Line Input

const fuelInventory = {
    Diesel: {
        pricePerLitre: 17,
        totalStock: 7000000000000000
    },

    Petrol: {
        pricePerLitre: 14,
        totalStock: 680004805485003
    }
};


// Get values from command line
let fuelType = process.argv[2];
let fuelUsed = Number(process.argv[3]);


// Check fuel type
if (fuelInventory[fuelType]) {

    let selectedFuel = fuelInventory[fuelType];

    if (fuelUsed > selectedFuel.totalStock) {

        console.log(`Not enough ${fuelType} available.`);

    } else {

        let remainFuel = selectedFuel.totalStock - fuelUsed;
        let usedValue = fuelUsed * selectedFuel.pricePerLitre;
        let remainValue = remainFuel * selectedFuel.pricePerLitre;


        console.log(`
========== ${fuelType} Report ==========

Fuel Used:
${fuelUsed} litres

Fuel Used Value:
$${usedValue}

Remaining Fuel:
${remainFuel} litres

Remaining Fuel Value:
$${remainValue}

========================================
        `);

    }

} else {

    console.log("Invalid fuel type. Use Diesel or Petrol.");

}
















// const fuelInventory = {
//     Diesel: {
//         pricePerLitre: 17,
//         totalStock: 7000000000000000
//     },

//     Petrol: {
//         pricePerLitre: 14,
//         totalStock: 680004805485003
//     }
// };


// let fuelUsed = Number(prompt("Enter litres used in numbers:"));
// let fuelType = prompt("Enter fuel type - type 'Petrol' or 'Diesel':");


// // Check if fuel type exists
// if (fuelInventory[fuelType]) {

//     let selectedFuel = fuelInventory[fuelType];

//     let remainFuel = selectedFuel.totalStock - fuelUsed;
//     let usedValue = fuelUsed * selectedFuel.pricePerLitre;
//     let remainValue = remainFuel * selectedFuel.pricePerLitre;


//     console.log(
// `${fuelType} fuel used is ${fuelUsed} litres.
// ${fuelType} fuel used value is $${usedValue}.
// ${fuelType} left is ${remainFuel} litres.
// ${fuelType} left value is $${remainValue}.`
//     );

// } 

// else {

//     console.log("Invalid fuel type. Please enter Petrol or Diesel.");

// }
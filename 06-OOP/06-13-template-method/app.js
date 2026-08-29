import CargoVessel from "./cargoVessel.js";
import ResearchVessel from "./researchVessel.js";


const cargoVessel =
    new CargoVessel();

const researchVessel =
    new ResearchVessel();


console.log("Cargo vessel:");

cargoVessel.prepare();


console.log("\nResearch vessel:");

researchVessel.prepare();
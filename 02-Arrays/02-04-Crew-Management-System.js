const crew = [

    "Captain",

    "Chief Officer",

    "Chief Engineer",

    "Electrician",

    "Cook"

];

const copyCrew = crew.slice(0, 3);
console.log(copyCrew);
console.log('');

const removeCrew = crew.splice(3, 1);
console.log(removeCrew);
console.log('');

console.log(crew);

crew.splice(4, 0, "Second Engineer");

console.log(crew);
console.log('');

console.log(crew.indexOf("Cook"));

const inCrew = crew.includes("Cook");

if (inCrew) {
    console.log("Yes");
}
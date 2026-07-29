const crew = [

    "Captain",

    "Chief Engineer",

    "Second Engineer",

    "Electrician",

    "Cook",

    "Bosun"

];

let [first, second, , ...rest] = crew;

// Swap first and second
[first, second] = [second, first];

console.log(first);
console.log(second);
console.log(rest);
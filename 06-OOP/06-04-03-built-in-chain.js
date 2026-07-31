const numbers = [1, 2, 3];
const first = Object.getPrototypeOf(numbers);
const second =Object.getPrototypeOf(
    Object.getPrototypeOf(numbers)
);

console.log(first);
console.log(second);
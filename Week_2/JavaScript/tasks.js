// Task 1: Declare age variable and check if adult
let age = 25;
let isAdult = age >= 18;
console.log(`Age: ${age}, Is Adult: ${isAdult}`);

// Task 2: Perform arithmetic operations
let x = 10, y = 5;
console.log(`Addition: ${x + y}, Multiplication: ${x * y}, Modulus: ${x % y}`);

// Task 3: Check even or odd
let n = 7;
let isEven = n % 2 === 0;
console.log(`Number: ${n}, Is Even: ${isEven}`);

// Task 4: Store numbers 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log(`Numbers Array: ${numbers}`);

// Task 5: Square function
function square(num) {
    return num * num;
}
console.log(`Square of 4: ${square(4)}`);

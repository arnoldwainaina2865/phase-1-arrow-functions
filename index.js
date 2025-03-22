// Function to add two numbers
const add = (a, b) => a + b;

// Function to subtract two numbers
const subtract = (a, b) => a - b;

// Function to multiply two numbers
const multiply = (a, b) => a * b;

// Function to divide two numbers
const divide = (a, b) => a / b;

// Function to square a number
const square = x => x ** 2;

// Function to find the sum of all numbers in an array
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

// Function to double each number in an array using .map()
const doubleArray = arr => arr.map(num => num * 2);

// Function to check if a number is even
const isEven = num => num % 2 === 0;

// Function to find all even numbers in an array
const filterEvens = arr => arr.filter(num => num % 2 === 0);

// Function to return an array of squares of numbers
const squareArray = arr => arr.map(num => num ** 2);

// Function to return an array with numbers greater than a given value
const greaterThan = (arr, min) => arr.filter(num => num > min);

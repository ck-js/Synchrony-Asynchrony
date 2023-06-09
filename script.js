

// sync and async examples 

console.log("We're calculating the first 6000 prime numbers");
console.log("Waiting...");
const array = [2];
let number = 3;
while (array.length < 6000) {
for (let i = 2; i < number; i++) {
if (number % i === 0) {
number++;
break;
}
if (i === number - 1) {

    array.push(number);
    number++;
    break;
}
}
    }
console.log(`We finished calculating the first
${array.length} prime numbers`);
console.log("We had to wait for this line to print");


console.log("We're calculating the first 12000 prime numbers");
console.log("Waiting...");
const array1 = [2];
let number1 = 3;
while (array1.length < 12000) {
    for (let i = 2; i < number; i++) {
if (number % i=== 0) {
number++;
break;
}
if (i === number1 - 1) {
    array1.push(number);
    number++;
    break;
}
    }
}
console.log(`We finished calculating the first ${array1.length} prime numbers`);
console.log("We had to wait even longer for this line to print");

function asyncExample() {
    const array = [2];
let number = 3;
while (array.length < 10000) {
for (let i = 2; i < number; i++) {
if (number % i === 0) {
number++;
break;
}
if (i === number - 1) {
    array.push(number);
    number++;
    break;
}
}
}   
return Promise.resolve(array);
}
asyncExample().then(function(value) {
console.log(`We calculated the first ${value.length} prime numbers`);

});
const asyncExample1 =
fetch("https://cat-fact.herokuapp.com");
asyncExample1.then(res => res.json()).then(data =>{
        console.log(`This is our data: ${data}`);
});
console.log("Waiting for the data...");
console.log("Continue to use the page while the page is requesting the data");

const array2 = [2, 5, 6, 7,10];
for (let i = 0; i < array2.length; i++) {
    array2[i] = array2[i] * 5;
    console.log(array2[i]);
}
console.log("Finished");

const array3 = [10, 8, 4, 2, 0];
console.log("Start loop...");
for (let i = 0; i < array3.length; i++) {
array3[i] /= 2;
console.log(array3[i]);
}
console.log("Finished division loop")

async function example() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("The operation is finished"), 1500);
    });
    const output = await promise;
    console.log(output);
}
example();
console.log("Hello...");


// call back functions 

function add(number1, number2, callback) {
    let result = number1 + number2;
    callback(result);
}
function logResult(result) {
    console.log(`The result is ${result}`);
}
add(5,5,logResult);

// call backs are the same as array functions like map, filter or reduce
const array4 = [2,5,7,8];
function callback(num) {
return num * 2;
} 
const newArray4 = array4.map(callback);
console.log(newArray4);
console.log("This code is synchronous");

const array5 = [1,2,3,4,5,6,7,8];
function evenNumberCallback(num) {
    return num % 2 === 0;
}
const evenNumberArray =
array5.filter(evenNumberCallback);
console.log(evenNumberArray);
console.log("This code is also synchronous");

const array6 = [-6, -5, -4, -2];
function makePositive(num) {
return num * -1;
}
const newArray6 =
array6.map(makePositive);
console.log(newArray6)

// call backs with asynchronous code //
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye...");
}
greet("Theresa", sayGoodbye);

function multiplyCallback(num) {
    const result = num * 2;
    console.log(`The input doubled is equal to ${result}`);
}
function doSomeMath(input, callback) {
    console.log("We are doubling the input number");
    callback(input);
}
doSomeMath(2, multiplyCallback);

function callbackFunc() {
console.log("Executed last because we're using asynchronous code");
}
setTimeout(callbackFunc, 1500);
console.log("Executed first");
console.log("Executed second");










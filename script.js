
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









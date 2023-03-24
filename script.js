
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

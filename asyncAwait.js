

async function asyncFunc() {
    console.log("I am an async function.");
}
asyncFunc();

let traditionalPromise = new Promise((resolve, reject) => {
setTimeout(() => resolve(
"This promise will always resolve after 2 seconds"),
 2000);
});
async function asyncFunc1() {
let value = await traditionalPromise;
console.log(value);
}
asyncFunc1();

let beverages = ["Tea", "Coffee", "Apple Cider"];

function pickRandomBeverage() {
return new Promise(function(resolve, Reject) {
let randomIndex = Math.floor(Math.random() *
beverages.length);
let selectedBeverage = beverages[randomIndex];
setTimeout(function() {
console.log(`${selectedBeverage} selected`);
resolve(selectedBeverage);
}, 1000);
});
}
function checkIfHotWaterIsReady(isBeverageSelected) {
return new Promise(function(resolve, reject) {
setTimeout(function() {
if (isBeverageSelected) {
console.log("Preparing...");
resolve(isBeverageSelected);
}else {
reject("No beverage has been picked up...");
}
}, 1000);
})
}




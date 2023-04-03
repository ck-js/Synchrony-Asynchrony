

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

function prepareDrink(selectedBeverage) {
return new Promise(function(resolve,reject) {
setTimeout(function() {
if (selectedBeverage) {
console.log(`Enjoy your ${selectedBeverage}`);
resolve(true);
}else {
reject("Drink not ready yet...");
}
}, 1000);
})
}
function nativePromiseHandling() {
const pickedDrink = pickRandomBeverage();
const handleWaterReadyCheck = 
function(selectedBeverage) {
return checkIfHotWaterIsReady(selectedBeverage); 
};
const handlePrepareDrink =
function(isBeverageSelected) {
    return prepareDrink(isBeverageSelected);
};
pickedDrink
.then(handleWaterReadyCheck)
.then(handlePrepareDrink);
}
nativePromiseHandling();

async function asyncAwaitPromiseHandling() {
const pickedDrink = await pickRandomBeverage();
const isHotWaterReady = await checkIfHotWaterIsReady(pickedDrink);
const isDrinkPrepared = await prepareDrink(isHotWaterReady);
return isDrinkPrepared;
}
asyncAwaitPromiseHandling();
// code examples above only handle resolve promise //

const stock = {
    sunglasses: {
        quantity: 0,
        price: 300,
    },
    bags: {
        quantity: 3,
        price: 600,
    }
};

const purchasePromise = new Promise(function(resolve, reject) {
if (stock.sunglasses.quantity > 0) {
resolve("Sunglasses are available, proceeding with order...");
}else {
    reject("Sunglasses are out of stock, cancelling order...");
}
});
async function orderSunglasses() {
try {
    let result = await purchasePromise;
    console.log(result);
} catch(error) {
console.log(error);
} 
}
orderSunglasses();

let obtainGrade = new Promise((resolve,reject) => {
setTimeout(() =>
 resolve("Your overall grade is B+"), 2000);
}); 
async function printGrade() {
let value = await obtainGrade;
console.log(value);
}
printGrade();

// add async function 
async function printHelloDevs() {
    console.log("Hello javascript developers");
}
printHelloDevs();

function goToTheMall() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve("I went to the mall to buy a new shirt");
}, 10000);
});
}
function selectShirt() {
return new Promise((resolve,reject) => {
setTimeout(() => {
resolve("I like the black shirt, think i will buy this one");
}, 500);
});
}
function purchaseShirt() {
    return new Promise((resolve,reject) => {
setTimeout(() => {
resolve("Bought shirt");
}, 500);
    })
}
async function handlePromise() {
const promiseHandler1 = await goToTheMall();
const promiseHandler2 = await selectShirt();
const promiseHandler3 = await purchaseShirt();
console.log(promiseHandler1);
console.log(promiseHandler2);
console.log(promiseHandler3);
}
handlePromise();

const airMimo = {
fleet: 150,
avgPrice: 650,
}
const purchaseTicket = new Promise((resolve, reject) => {
if (airMimo.avgPrice < 700) {
resolve("Tickets are under 700");
} else {
    reject("Tickets are over 700");
}
});
async function buyTicket() {
try {
let result = await purchaseTicket;
console.log(result);
}catch(error) {
console.log(error);
}
}
buyTicket();

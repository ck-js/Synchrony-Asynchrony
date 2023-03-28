

const promiseDemo = new Promise(function(resolve, reject) {
});
const aBrandNewPromise = new Promise(function() {
});

const dessertStock = {
    cheeseCake: 5,
    croissant: 20,
    custard: 0,
} 
function orderCheesecake() {
return new Promise(function(resolve, reject) {
if (dessertStock.cheeseCake > 0) {
    resolve("Cheesecake is available, your order has been processed");
}
});    
}
const makeOrder = orderCheesecake();
console.log(makeOrder);












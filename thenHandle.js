const dessertStock = {
cheeseCake: 0,
mousse: 5,
custard: 0,
}
function orderCheesecake() {
return new Promise(function(resolve, reject) {
    if (dessertStock.cheeseCake > 0) {
        resolve("Cheesecake is available")
    }else {
        reject("Cheesecake is sold out")
    }
});
}
function handleSuccess(successValue) {
    console.log(successValue);
};
const makeOrder1 = orderCheesecake();
makeOrder1.then(handleSuccess);






const promiseDemo = new Promise(function(resolve, reject) {
});
const aBrandNewPromise = new Promise(function() {
});

const dessertStock = {
    cheeseCake: 0,
    croissant: 20,
    custard: 1,
} 
function orderCheesecake() {
return new Promise(function(resolve, reject) {
if (dessertStock.cheeseCake > 0) {
    resolve("Cheesecake is available, your order has been processed");
} else {
    reject("Cheese is not available therefore cheesecake is out of stock");
}
});    
}
const makeOrder1 = orderCheesecake();
console.log(makeOrder1);

function orderCustard() {
    return new Promise(function(resolve, reject) {
    if (dessertStock.custard > 0) {
        resolve("Custard order successful");
    } else {
        reject("Custard is not available right now");
    }
    });
}
const makeOrder2 = orderCustard();
console.log(makeOrder2);

const travelTicket = {
    type: "Return",
    airline: "THAI",
    fare: "Economy",
    price: 800,
    airports: {departure: "BKK", destination: "CPT"}
};
console.log(travelTicket);
function checkTicketPrice() {
    return new Promise(function(resolve, reject) {
if (travelTicket.fare === "Economy" && travelTicket.price < 800) {
resolve("Great deal, the price is right")
} else {
    reject("The tickets are too expensive, check again later")
}

    });
}
let showTicketPrice = checkTicketPrice();
console.log(showTicketPrice);




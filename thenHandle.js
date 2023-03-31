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
function handleFailure(failureValue) {
    console.log(failureValue);
}

const makeOrder1 = orderCheesecake();
makeOrder1.then(handleSuccess).catch(handleFailure);

const flowerStock = {
    girlScoutCookies: {
        inStockAmount: 3,
        price: 450,
    },
    whiteWidow: {
        inStockAmount: 6,
        price: 350,
    },
    };
    const flowerBudget = 300;
function isAvailable() {
    return new Promise(function(resolve, reject) {
if (flowerStock.girlScoutCookies.inStockAmount > 0) {
resolve(true);
        }else {
            reject(false);
        }
    });
}
function checkPrice(productAvailable) {
    return new Promise(function(resolve, reject) {
        if (productAvailable && flowerStock.girlScoutCookies.price <= flowerBudget) {
        resolve("Good price and within my budget");
        }else {
            reject("Too expensive and out of my budget");
        }
    });
}
function handleIsAvailable(isAvailable) {
    return checkPrice(isAvailable);
}
function handleCheckPrice(successValue) {
    console.log(successValue);
}
function handleFlowerFailure(failureValue) {
    console.log(failureValue);
}

const checkAvailability = isAvailable();
checkAvailability.then(handleIsAvailable).then(handleCheckPrice).catch(handleFlowerFailure);


// promise practice notes and code examples 

const bookStore = {
    novels: {
        quantity: 20,
        languages: ["English", "German", "Japanese"],
    },
    history: {
        quantity: 13,
        languages: ["English", "Russian", "Spanish"],
    },
    scifi: {
        quantity: 0,
        languages: [],
    }
}
function purchaseNovels() {
    return new Promise(function(resolve, reject) {
        if (bookStore.scifi.quantity > 0) {
            resolve("There are many novels in stock, proceeding with order");
        }else {
            reject("Not available at the moment, check again later..")
        }
    });
}
const makeBookstoreOrder =purchaseNovels(); 
console.log(makeBookstoreOrder);

const inventory = {
    glueSticks: 1,
    notebooks: 3, 
pencils: 0,
}
let purchaseGlueSticks = false;
let purchaseNotebooks = false;

function orderGlueSticks() {
    return new Promise(function(resolve, reject) {
if (inventory.glueSticks > 0) {
    purchaseGlueSticks = true;
    resolve(purchaseGlueSticks);
}else {
  reject("Item gluesticks not available");  
}
    });
}
function orderNotebooks(glueSticksPurchased) {
    return new Promise(function(resolve, reject) {
        if (inventory.noteBooks > 0 && glueSticksPurchased) {
            purchaseNotebooks = true;
            resolve(purchaseNotebooks)
        }else {
            reject("Item notebooks not available in inventory");
        }
    });
}
function completeOrder() {
    return orderGlueSticks().then(function(glueSticksPurchased) {
        return orderNotebooks(glueSticksPurchased).then(function(result) {
            if (result) {
                console.log("Successfully purchased gluesticks hence i bought notebooks afterwards");
            }
        })
    })
}
console.log(completeOrder());


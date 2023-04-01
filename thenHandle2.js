

const inventory = {
glueSticks: 10,
notebooks: 17,
pencils: 10,

};
let purchaseGlueStick = false;
let purchaseNotebook = false;

function orderGlueSticks() {
return new Promise(function(resolve, reject) {
    if (inventory.glueSticks > 0) {
        purchaseGlueStick = true;
        resolve(purchaseGlueStick);
    }else {
    reject("Item gluestick not in in inventory");
    }
});
}
function orderNotebooks(glueStickPurchased) {
    return new Promise(function(resolve, reject) {
        if (inventory.notebooks > 0 && glueStickPurchased) {
            purchaseNotebook = true;
            resolve(purchaseNotebook);
        } else {
            reject("Item gluestick and/or notebook not available");
        }
    });
}

function completeOrder() {
return orderGlueSticks()
.then(function( glueStickPurchased) {
    return orderNotebooks(glueStickPurchased)
    .then(function(result) {
        if (result) {
            console.log("Successfully purchased both gluestick and notebook");
        }
    });
});
}
completeOrder();



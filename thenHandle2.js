

const inventory = {
glueSticks: 17,
notebooks: 1,
pencils: 1,

};
let purchaseGlueStick = false;
let purchaseNotebook = false;
let purchasePencil = false

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

function orderPencils(notebookPurchased) {
return new Promise(function(resolve,reject) {
  if (inventory.pencils > 0 && notebookPurchased) {
    purchasePencil = true;
    resolve(purchasePencil);
  }else {
    reject("Pencils are out of stock");
  }  
});
}

function completeOrder() {
return orderGlueSticks()
.then(function( glueStickPurchased) {
    return orderNotebooks(glueStickPurchased)
    .then(function(notebookPurchased) {
return orderPencils(notebookPurchased).then(function(result) {
            console.log("Successfully purchased both gluestick and notebook and pencil");
}).catch(function(error) {
console.log(error);
});
});
});
}
completeOrder();



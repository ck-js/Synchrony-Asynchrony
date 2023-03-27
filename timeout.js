console.log("Executed first");
setTimeout(() => {
    console.log("Executed last...because of 2000ms timeout");
}, 2000);
console.log("Executed second");

console.log("Executed first");
setTimeout(() => {
    console.log("Executed last even if timeout set to 0ms");
}, 0);
console.log("Executed second");


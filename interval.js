// delete first code example as it ran forever //
// noww writing revised version that won't run forever //

let blinkerOn = false;
let blinkerInterval = setInterval(() => {
if (blinkerOn) {
    console.log("Blinker Off");
    blinkerOn = false;
} else {
console.log("Blinker On");
blinkerOn = true;    
}
}, 500);
setTimeout(() => {
    clearInterval(blinkerInterval);
    console.log("Stop");
}, 2500);

let countdown = 3;
const countdownInterval = setInterval(() => {
if (countdown > 0) {
    console.log(countdown);
}
countdown--;
if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Go");
}
}, 3000);









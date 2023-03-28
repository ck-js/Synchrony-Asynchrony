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

let count = 0;
 let intervalID;
function callback() {
if (count < 3) {
    count += 1;
    console.log("Callback executed");
} else {
    clearInterval(intervalID);
    console.log("The interval was cleared after 3 executions");
}
}
function start() {
    intervalID = setInterval(callback,600);
}
start();

let intervalID2;
let direction = "Left";
function startInterval() {
    intervalID2 = setInterval(() => {
        if (direction === "Left") {
direction = "Right";
        } else {
direction = "Left";            
        }
    console.log(direction);
}, 500);
}
function stopInterval() {
    clearInterval(intervalID2);
    console.log("Interval stopped");
}
startInterval();
setTimeout(stopInterval, 2000);





function callbackFunc() {
    console.log("Executed last because we're using asynchronous code");
    };
    setTimeout(callbackFunc, 1500);
    console.log("Executed first");
    console.log("Executed second");
    
    const word = "enola";
     function reverseCallback() {
        const result = word.split("").reverse().join("");
        console.log(`The string reversed is ${result}`);
        console.log("Executed last because we're using asynchronous code");
     }
    setTimeout(reverseCallback, 1500);
    
    
    
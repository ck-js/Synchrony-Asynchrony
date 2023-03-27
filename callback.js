

function callbackFunc() {
    console.log("Executed last because we're using asynchronous code");
    };
    setTimeout(callbackFunc, 1000);
    console.log("Executed first");
    console.log("Executed second");
    
    const word = "enola";
     function reverseCallback() {
        const result = word.split("").reverse().join("");
        console.log(`The string reversed is ${result}`);
        console.log("Executed last because we're using asynchronous code");
     }
    setTimeout(reverseCallback, 1500);
console.log("Executed first, before the word was reversed");
    // notice how the first call back prints after the first console log of second call back //

// deeply nested call backs are beneficial but can get confusing and undersirable //

const sayHello = (name, callback) => {
    console.log(`Hey there, ${name}`);
 callback();   
}
const sayGoodbye = () => {
    console.log("Goodbye");
}
sayHello("Vladimir", sayGoodbye);



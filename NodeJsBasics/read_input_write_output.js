// Print a value to the terminal
//      console.log("Hello from Node Js");
//      console.log("Hello from Node Js the second message");

// Read input from console
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    console.log(`Your name is ${name}`);
    rl.close();
})

rl.on('close', ()=> {
    console.log("Interface closed");
    process.exit(0);
});
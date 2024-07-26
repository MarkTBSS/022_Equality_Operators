"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

rl.question("What's your favourite number? ", (input) => {
    const favourite = Number(input);
    console.log(favourite);
    console.log(typeof favourite);

    if (favourite === 23) {
        console.log("Cool! 23 is an amazing number!");
    } else if (favourite === 7) {
        console.log("7 is also a cool number");
    } else if (favourite === 9) {
        console.log("9 is also a cool number");
    } else {
        console.log("Number is not 23 or 7 or 9");
    }
    if (favourite !== 23) console.log("Why not 23?");
    rl.close();
});

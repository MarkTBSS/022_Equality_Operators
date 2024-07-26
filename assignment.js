"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(
    "How many neighbour countries does your country have? ",
    (input) => {
        const numNeighbours = Number(input);
        console.log(numNeighbours);
        console.log(typeof numNeighbours);

        if (numNeighbours === 1) {
            console.log("Only 1 border!");
        } else if (numNeighbours > 1) {
            console.log("More than 1 border");
        } else {
            console.log("No borders");
        }
        rl.close();
    }
);

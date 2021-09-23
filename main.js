const prompt = require('prompt-sync')({ sigint: true });

let x1= 0;
let y1 = 0;

while (true) {

    const userMove = prompt(`Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);

    if (userMove === 'up') {
        y1 = y1 + 1;
        console.log(`Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else if (userMove === 'right') {
        x1 = x1 + 1;
        console.log(`Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else if (userMove === 'down') {
        y1 = y1 - 1;
        console.log(`Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else if (userMove === 'left') {
        x1 = x1 - 1;
        console.log(`Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else {
        console.log("Error!");
    }
}
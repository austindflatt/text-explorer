const prompt = require('prompt-sync')({ sigint: true });

let x1= 0;
let y1 = 0;

while (true) {

    const userMove = prompt(`You find yourself in a forest. Trees tower around you.\n Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);

    if (userMove === 'up') {
        y1 = y1 + 1;
        console.log(`You find yourself in the desert. With nothing but sand dunes around you. \n Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else if (userMove === 'right') {
        x1 = x1 + 1;
        console.log(`You are on a iceberg. Surrounded by water. \n Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else if (userMove === 'down') {
        y1 = y1 - 1;
        console.log(`You emerge into flat land. \n Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else if (userMove === 'left') {
        x1 = x1 - 1;
        console.log(`You emerge into a meadow with tall grass. \n Your coordinates are (${x1}, ${y1}). Would you like to go "up", "right", "down", or "left"?`);
    } else {
        console.log("Error!");
    }
}
"use strict";
let magicianNames2 = ["Ayaz", "Fayaz", "Tariq", "Madad"];
// // making a copy of an array
let magicianNamesCopy = [...magicianNames2];
function show_magicians(greet) {
    let withGreetings = "";
    for (let item of magicianNamesCopy) {
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
}
;
let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split('\n');
console.log(makeArray);
// original array
console.log(magicianNames2);

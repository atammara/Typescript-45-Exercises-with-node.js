"use strict";
// function make_car(manufacturer: string, model: string, ...options: [string,any][]): Object{
//     let car = { manufacturer, model};
//     options.forEach(([key , value]) => car[key])
// }
Object.defineProperty(exports, "__esModule", { value: true });
function carDetails(manufacturer, modelName, ...additionalInfo) {
    const car = { manufacturer, modelName, ...Object.fromEntries(additionalInfo) };
    return car;
}
;
const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
console.log(myCarDetails);

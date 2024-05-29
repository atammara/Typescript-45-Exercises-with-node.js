"use strict";
function city_country(city, country) {
    return `${city} , ${country}`;
    console.log(`"${city}, ${country}"`);
}
city_country("Karachi", "Pakistan");
let myCities = city_country("Karachi", "Pakistan");
console.log(myCities);
console.log(city_country("Dubai", " UAE"));
console.log(city_country("Lodon", "United Kingdom"));
console.log(city_country("Riyaz", "Saudia Arabia"));

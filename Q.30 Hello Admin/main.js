"use strict";
let users = ['sana', 'babar', 'saba', 'taha', 'admin'];
for (let user of users) {
    if (user === "admin") {
        console.log("Hellow admin, would you like to see a status reports?");
    }
    else {
        console.log(`Hellow ${users}, thank you for logging in again.`);
    }
}

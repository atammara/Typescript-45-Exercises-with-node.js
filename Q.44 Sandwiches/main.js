"use strict";
function make_sandwich(...items) {
    console.log(`Making a sandwich with : ${items.join(',')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "ketchup", "Potato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

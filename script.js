const serveBtn = document.getElementById("serveBtn");
const petSelect = document.getElementById("petSelect");
const mealSelect = document.getElementById("mealSelect");
const reaction = document.getElementById("reaction");

const reactions = {
    "Unicorn": {
        "Star Dust Pancakes": "The unicorn is happy!",
        "Meteor Meatballs": "The unicorn loves it!",
        "Invisible Ice Cream": "The unicorn giggles!"
    },
    "Mini Dragon": {
        "Star Dust Pancakes": "The dragon smiles!",
        "Meteor Meatballs": "The dragon dances!",
        "Invisible Ice Cream": "The dragon puffs smoke!"
    },
    "Alien Blob": {
        "Star Dust Pancakes": "The blob wiggles!",
        "Meteor Meatballs": "The blob glows!",
        "Invisible Ice Cream": "The blob disappears!"
    }
};

serveBtn.addEventListener("click", () => {
    const pet = petSelect.value;
    const meal = mealSelect.value;

    if (!pet || !meal) {
        reaction.textContent = "Please select both a pet and a meal!";
        return;
    }

    reaction.textContent = reactions[pet][meal];
});

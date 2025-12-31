const lobby = document.getElementById("lobby");
const scene = document.getElementById("restaurant-scene");
const petImg = document.getElementById("pet-img");
const petBubble = document.getElementById("pet-bubble");
const staffBubble = document.getElementById("staff-bubble");
const mealSelect = document.getElementById("meal-select");
const serveBtn = document.getElementById("serve-btn");

let currentPet = "";

const staffLines = [
    "Great choice!",
    "That's our specialty!",
    "Coming right up!",
    "The chef is on it!"
]

const reactions = {
    "Unicorn": "Delicously magical!",
    "Dragon": "Spicy and hot!",
    "Blob": "Gloop... Yumm!"
}

function initRestaurant(name,path){
    currentPet = name;
    petImg.src = path;
    lobby.style.display = 'none';
    scene.style.display = 'block';

    setTimeout(() => {
        staffBubble.innerText = "Welcome! What Can I get you?";
        staffBubble.style.opacity = '1';
    }, 500);
}

serveBtn.addEventListener("click", () => {
    const meal = mealSelect.value;
    staffBubble.innerText = staffLines[Math.floor(Math.random() * staffLines.length)];

    setTimeout(() => {
        petImg.classList.add('dance');
        petBubble.innerText = reactions[currentPet];
        petBubble.style.opacity = '1';

        setTimeout(() => {
            petImg.classList.remove('dance');
            petBubble.style.opacity = '0';
            staffBubble.innerText = "Anything else?";
        }, 3000);
    }, 1000);
});
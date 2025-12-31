let currentPetName = "";

    const reactions = {
        "Unicorn": "It burps glitter!",
        "Mini Dragon": "Small smoke puff!",
        "Alien Blob": "It jiggles menacingly."
    };


    function selectPet(name, imageUrl){
        currentPetName = name;
        
        const windowImg = document.getElementById('window-pet-img');
        windowImg.src = imageUrl;
        
        document.getElementById('lobby-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('lobby-screen').style.display = 'none';
            document.getElementById('restaurant-screen').style.display = 'flex';
        }, 500);
    }

    function serveOrder(){
        const meal = document.getElementById("mealSelect").value;
        const petImg = document.getElementById("window-pet-img");
        const bubble = document.getElementById("reaction-bubble");

        petImg.classList.add("eating");

        bubble.innerText = reactions[currentPetName];
        bubble.style.opacity = '1';

        setTimeout(() => {
            petImg.classList.remove("eating");
            bubble.style.opacity = '0';
        }, 2000);
    }
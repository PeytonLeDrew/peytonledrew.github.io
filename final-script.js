document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const createPage = document.getElementById("create-page");
  const carePage = document.getElementById("care-page");

  const loadPetButton = document.getElementById("load-pet");
  const createPetButton = document.getElementById("create-pet");
  const submitPetButton = document.getElementById("submit-pet");
  const clearDataButton = document.getElementById("clear-data");

  const petTitle = document.getElementById("pet-title");
  const petImg = document.getElementById("pet-img");
  const hungerBar = document.getElementById("hunger-bar");
  const thirstBar = document.getElementById("thirst-bar");
  const happinessBar = document.getElementById("happiness-bar");
  const feedButton = document.getElementById("feed");
  const waterButton = document.getElementById("water");
  const petButton = document.getElementById("pet");

  let pet = null;
  let hungerTimer, thirstTimer, happinessTimer;

  // Show a specific section
  function showSection(section) {
    landingPage.classList.add("hidden");
    createPage.classList.add("hidden");
    carePage.classList.add("hidden");
    section.classList.remove("hidden");
  }

  // Save pet to localStorage
  function savePet() {
    localStorage.setItem("petData", JSON.stringify(pet));
  }

  function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    return canvas
      .toDataURL("image/png")
      .replace(/^data:image\/(png|jpg);base64,/, "");
  }

  // Load pet from localStorage
  function loadPet() {
    const petData = localStorage.getItem("petData");
    if (petData) {
      pet = JSON.parse(petData);
      console.log("Loaded pet:", pet);
      petTitle.textContent = pet.name;
      petImg.src = "data:image/png;base64," + pet.image;
      petImg.classList.toggle("grayscale", pet.dead);
      updateBars();
      startTimers();
      showSection(carePage);
    } else {
      alert("No pet found. Please create one.");
      showSection(createPage);
    }
  }

  // Update visual bars for stats
  function updateBars() {
    hungerBar.style.width = `${(pet.hunger / 5) * 100}%`;
    thirstBar.style.width = `${(pet.thirst / 5) * 100}%`;
    happinessBar.style.width = `${(pet.happiness / 5) * 100}%`;

    if (pet.hunger === 0 && pet.thirst === 0 && pet.happiness === 0) {
      pet.dead = true;
      petImg.classList.add("grayscale");
      alert("Your pet has died. Please create a new pet.");
      stopTimers();
    }
    savePet();
  }

  // Start independent timers for stat decay
  function startTimers() {
    if (hungerTimer || thirstTimer || happinessTimer) stopTimers();

    hungerTimer = setInterval(() => {
      if (!pet.dead && pet.hunger > 0) {
        pet.hunger--;
        updateBars();
      }
    }, 7200000); // Every 2 hours

    thirstTimer = setInterval(() => {
      if (!pet.dead && pet.thirst > 0) {
        pet.thirst--;
        updateBars();
      }
    }, 3600000); // Every hour

    happinessTimer = setInterval(() => {
      if (!pet.dead && pet.happiness > 0) {
        pet.happiness--;
        updateBars();
      }
    }, 1800000); // Every 30 minutes
  }

  // Stop all timers
  function stopTimers() {
    clearInterval(hungerTimer);
    clearInterval(thirstTimer);
    clearInterval(happinessTimer);
    hungerTimer = null;
    thirstTimer = null;
    happinessTimer = null;
  }

  // Clear all data and reset state
  clearDataButton.addEventListener("click", () => {
    console.log("Clearing all data...");
    localStorage.clear();
    pet = null;
    stopTimers();
    alert("All data has been cleared.");
    showSection(landingPage);
  });

  // Event Listeners
  loadPetButton.addEventListener("click", loadPet);

  createPetButton.addEventListener("click", () => {
    showSection(createPage);
  });

  submitPetButton.addEventListener("click", () => {
    const name = document.getElementById("pet-name").value;
    const file = document.getElementById("pet-image").files[0];

    if (!name || !file) {
      alert("Please provide a name and an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        pet = {
          name,
          image: getBase64Image(img),
          hunger: 3,
          thirst: 3,
          happiness: 3,
          dead: false,
        };
        console.log("Pet created:", pet);
        savePet();
        loadPet();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  feedButton.addEventListener("click", () => {
    if (!pet.dead && pet.hunger < 5) {
      pet.hunger++;
      updateBars();
    }
  });

  waterButton.addEventListener("click", () => {
    if (!pet.dead && pet.thirst < 5) {
      pet.thirst++;
      updateBars();
    }
  });

  petButton.addEventListener("click", () => {
    if (!pet.dead && pet.happiness < 5) {
      pet.happiness++;
      updateBars();
    }
  });
});

// Burger Menu
(() => {
  // Get elements
  const navMenu = document.getElementById("nav-menu");
  const burgerMenu = document.querySelector(".b-menu");
  const bContainer = document.querySelector(".b-container");
  const bNav = document.querySelector(".b-nav");
  const elements = [navMenu, burgerMenu, bContainer, bNav];

  // Function to open/close the menu
  const toggleMenu = () =>
    elements.forEach((el) => el.classList.toggle("open"));
  burgerMenu.addEventListener("click", toggleMenu);

  // Close menu when clicking outside
  document.body.addEventListener("click", (e) => {
    if (
      !navMenu.contains(e.target) &&
      !burgerMenu.contains(e.target) &&
      navMenu.classList.contains("open")
    ) {
      toggleMenu();
    }
  });
})();


// Slider
document.addEventListener("DOMContentLoaded", () => {
  const createSlider = (containerSelector) => {
    // Get slider elements
    const sliderContainer =
      document.querySelector(
        `${containerSelector} .slider-container .offers__grid`
      ) ||
      document.querySelector(
        `${containerSelector} .slider-container .awards__grid`
      );
    const sliderBlocks = Array.from(sliderContainer.children);
    const nextBtn = document.querySelector(`${containerSelector} .next-btn`);
    const prevBtn = document.querySelector(`${containerSelector} .prev-btn`);
    const progressBar = document.querySelector(
      `${containerSelector} .progress-bar .progress`
    );
    let currentIndex = 0;
    const itemsPerSlide = 3;
    const sliderBlockSize = sliderBlocks[0].offsetWidth + 30; // Calculate block size

    // Update progress bar
    const updateProgress = () => {
      const progressPercentage =
        ((currentIndex + itemsPerSlide) / sliderBlocks.length) * 100;
      progressBar.style.width = `${progressPercentage}%`;
    };

    // Move slider
    const updateSlider = () => {
      const translateValue = -(currentIndex * sliderBlockSize);
      sliderContainer.style.transition = "transform 0.7s ease-in-out";
      sliderContainer.style.transform = `translateX(${translateValue}px)`;
      updateProgress();
    };

    // Next and Previous buttons
    const handleNext = () => {
      currentIndex = (currentIndex + 1) % sliderBlocks.length;
      if (currentIndex + itemsPerSlide > sliderBlocks.length) {
        currentIndex = 0; // Reset if at the end
      }
      updateSlider();
    };

    const handlePrev = () => {
      currentIndex =
        currentIndex - 1 < 0
          ? sliderBlocks.length - itemsPerSlide
          : currentIndex - 1;
      updateSlider();
    };

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    updateSlider(); // Start slider
  };

  createSlider(".offers");
  createSlider(".awards");
});






// Language Toggle Script
document.addEventListener("DOMContentLoaded", () => {
  const langToggles = document.querySelectorAll(".language-toggle");
  const langTexts = document.querySelectorAll(".lang-text");
  let currentLang = localStorage.getItem("currentLang") || "ka"; // Get saved language

  // Update language displayed
  const updateLanguageDisplay = (lang) => {
    langTexts.forEach(
      (text) => (text.textContent = lang === "en" ? "EN" : "ქარ")
    );
  };

  // Load language file
  const loadLanguage = (lang) => {
    const langPath = `lang/${lang}.json`;
    fetch(langPath)
      .then((response) => response.json())
      .then((data) => {
        document.querySelectorAll("[data-lang-key]").forEach((elem) => {
          const value = elem
            .getAttribute("data-lang-key")
            .split(".")
            .reduce((acc, key) => acc?.[key], data);
          elem.innerHTML =
            value || `Key not found: ${elem.getAttribute("data-lang-key")}`;
        });
      })
      .catch((error) => {
        console.error("Error loading language file:", error);
        document.querySelectorAll("[data-lang-key]").forEach((elem) => {
          elem.innerHTML = "Loading failed";
        });
      });
  };

  updateLanguageDisplay(currentLang);
  loadLanguage(currentLang);

  // Switch language on toggle click
  langToggles.forEach((toggle) =>
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      currentLang = currentLang === "en" ? "ka" : "en";
      localStorage.setItem("currentLang", currentLang);
      updateLanguageDisplay(currentLang);
      loadLanguage(currentLang);
    })
  );
});

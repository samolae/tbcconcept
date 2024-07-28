//burger
(() => {
  const navMenu = document.getElementById('nav-menu');
  const burgerMenu = document.querySelector('.b-menu');

   const toggleMenu = () => [navMenu, burgerMenu, document.querySelector('.b-container'), document.querySelector('.b-nav')]
    .forEach(el => el.classList.toggle('open'));

   burgerMenu.addEventListener('click', toggleMenu);

  // Close the menu when clicking outside
  document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target) && navMenu.classList.contains('open')) {
      toggleMenu();
    }
  });
})();



// slider
document.addEventListener('DOMContentLoaded', () => {
  const createSlider = (containerSelector) => {
    const sliderContainer = document.querySelector(`${containerSelector} .slider-container .offers__grid`)
      || document.querySelector(`${containerSelector} .slider-container .awards__grid`);
    const sliderBlocks = Array.from(sliderContainer.children);
    const nextBtn = document.querySelector(`${containerSelector} .next-btn`);
    const prevBtn = document.querySelector(`${containerSelector} .prev-btn`);
    const progressBar = document.querySelector(`${containerSelector} .progress-bar .progress`);
    let currentIndex = 0;
    const itemsPerSlide = 3;
    const sliderBlockSize = sliderBlocks[0].offsetWidth + 30; // Calculate the size of each slide block

    const updateProgress = () => {
      const progressPercentage = ((currentIndex + itemsPerSlide) / sliderBlocks.length) * 100;
      progressBar.style.width = `${progressPercentage}%`;
    };

    const updateSlider = () => {
      const translateValue = -(currentIndex * sliderBlockSize);
      sliderContainer.style.transform = `translateX(${translateValue}px)`;
      updateProgress(); // Update the progress bar whenever the slider updates
    };

    const handleNext = () => {
      currentIndex = (currentIndex + 1) % sliderBlocks.length;
      if (currentIndex + itemsPerSlide > sliderBlocks.length) {
        currentIndex = 0; // Reset to start if end is reached
      }
      updateSlider();
    };

    const handlePrev = () => {
      currentIndex = currentIndex - 1 < 0 ? sliderBlocks.length - itemsPerSlide : currentIndex - 1;
      updateSlider();
    };

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    updateSlider(); // Initial update to position the slider correctly on page load
  };

  createSlider('.offers');
  createSlider('.awards');
});






// Language toggle script using ES6
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('language-toggle');
  const langText = document.getElementById('lang-text');

  // Retrieve the current language setting from local storage or default to Georgian ('ka')
  let currentLang = localStorage.getItem('currentLang') || 'ka';

  // Update the display text based on the current language
  langText.textContent = currentLang === 'en' ? 'EN' : 'ქარ';

  langToggle.addEventListener('click', (event) => {
    event.preventDefault();
    currentLang = currentLang === 'en' ? 'ka' : 'en';
    localStorage.setItem('currentLang', currentLang); // Save the current language to local storage
    langText.textContent = currentLang === 'en' ? 'EN' : 'ქარ'; // Update the display text
    loadLanguage(currentLang); // Load the selected language
  });

  const loadLanguage = (lang) => {
    fetch(`lang/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        document.querySelectorAll("[data-lang-key]").forEach(elem => {
          const keyPath = elem.getAttribute('data-lang-key').split('.');
          let value = keyPath.reduce((acc, key) => acc?.[key], data); // Traverse nested properties if needed
          elem.innerHTML = value || `Key not found: ${elem.getAttribute('data-lang-key')}`; // Set HTML or default text
        });
      })
      .catch(error => console.error('Error loading language file:', error));
  };

  loadLanguage(currentLang); // Load the initial language
});

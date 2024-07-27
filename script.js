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

(() => {
  const navMenu = document.getElementById('nav-menu');
  const burgerMenu = document.querySelector('.b-menu');

   const toggleMenu = () => [navMenu, burgerMenu, document.querySelector('.b-container'), document.querySelector('.b-nav')]
    .forEach(el => el.classList.toggle('open'));

   burgerMenu.addEventListener('click', toggleMenu);

   document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target) && navMenu.classList.contains('open')) {
      toggleMenu();
    }
  });
})();



// slider

document.addEventListener('DOMContentLoaded', () => {
  const createSlider = (containerSelector) => {
    const sliderContainer = document.querySelector(`${containerSelector} .slider-container .offers__grid`) || document.querySelector(`${containerSelector} .slider-container .awards__grid`);
    const sliderBlocks = Array.from(sliderContainer.children);
    const nextBtn = document.querySelector(`${containerSelector} .next-btn`);
    const prevBtn = document.querySelector(`${containerSelector} .prev-btn`);
    const progressBar = document.querySelector(`${containerSelector} .progress-bar .progress`);
    const totalItems = sliderBlocks.length;
    let currentIndex = 0;
    const itemsPerSlide = 3; // Number of cards shown at a time
    const resetIndex = totalItems - itemsPerSlide; // Reset index when reaching this value
    const sliderBlockSize = sliderBlocks[0].offsetWidth + 30;

    const updateProgressBar = () => {
      let progressWidth = ((currentIndex + itemsPerSlide) / totalItems) * 100;
      progressWidth = progressWidth > 100 ? 100 : progressWidth; // Ensure progressWidth does not exceed 100%
      progressBar.style.width = `${progressWidth}%`;
    };

    const handleSlider = () => {
      sliderContainer.style.transition = 'transform 0.5s ease';
      sliderContainer.style.transform = `translateX(-${currentIndex * sliderBlockSize}px)`;
      updateProgressBar();
    };

    const updateIndex = (direction) => {
      if (direction === "next") {
        currentIndex = (currentIndex + 1) % totalItems;
        if (currentIndex > resetIndex) {
          setTimeout(() => {
            sliderContainer.style.transition = 'none';
            currentIndex = 0;
            handleSlider();
          }, 500);
        }
      } else {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        if (currentIndex < 0) {
          setTimeout(() => {
            sliderContainer.style.transition = 'none';
            currentIndex = totalItems - itemsPerSlide;
            handleSlider();
          }, 500);
        }
      }
      handleSlider();
      console.log(`Current Index - ${currentIndex}`);
    };

    nextBtn.addEventListener("click", () => updateIndex("next"));
    prevBtn.addEventListener("click", () => updateIndex("prev"));

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

    const touchStart = (event) => {
      startPos = getPositionX(event);
      isDragging = true;
      sliderContainer.style.transition = 'none';
    };

    const touchEnd = () => {
      isDragging = false;
      const movedBy = currentTranslate - prevTranslate;
      if (movedBy < -100) updateIndex("next");
      if (movedBy > 100) updateIndex("prev");
      setPositionByIndex();
    };

    const touchMove = (event) => {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
        sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
      }
    };

    const setPositionByIndex = () => {
      currentTranslate = currentIndex * -sliderBlockSize;
      prevTranslate = currentTranslate;
      sliderContainer.style.transition = 'transform 0.5s ease';
      sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
      updateProgressBar();
      console.log('currenttra', currentTranslate);
    };

    sliderBlocks.forEach((block) => {
      block.querySelector('img')?.addEventListener('dragstart', (e) => e.preventDefault());
      block.addEventListener('touchstart', touchStart);
      block.addEventListener('touchend', touchEnd);
      block.addEventListener('touchmove', touchMove);
      block.addEventListener('mousedown', touchStart);
      block.addEventListener('mouseup', touchEnd);
      block.addEventListener('mouseleave', touchEnd);
      block.addEventListener('mousemove', touchMove);
    });

    window.addEventListener('resize', handleSlider);

    // Initialize the slider on page load
    handleSlider();
  };

  createSlider('.offers');
  createSlider('.awards');
});

var swiper = new Swiper('.swiper mySwiper', {
    // Other options...
    on: {
      slideChange: function () {
        var activeSlideIndex = this.realIndex; // Get the index of the active slide
        var carInfoElements = document.querySelectorAll('.swiper-slide .model-info');
  
        // Hide car info for all slides
        carInfoElements.forEach(function (element) {
          element.style.display = 'none';
        });
  
        // Show car info for the active slide
        carInfoElements[activeSlideIndex].style.display = 'none';
      }
    }
  });
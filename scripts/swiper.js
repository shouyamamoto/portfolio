var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    effect: 'fade',
    
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
})
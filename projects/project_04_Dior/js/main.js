const swiperTop = new Swiper('.top_swiper', {
    // Optional parameters
    effect: 'fade',
    // autoplay: {
    //   delay: 3500,
    //   dasableOnIteraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  const swiperAbout = new Swiper(".about_slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  document.querySelectorAll('.accordeon_triger').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordeon_item-active')
    })
  });

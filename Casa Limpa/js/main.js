// Inicialização do Carrossel Swiper
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.marcas-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000, // Passa automaticamente a cada 5 segundos (5000 milissegundos)
      disableOnInteraction: false, // Continua a passar sozinho mesmo depois de o utilizador clicar
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsividade (quantidade de cards conforme o tamanho do ecrã)
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
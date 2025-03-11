$(document).ready(function(){
    $("#for_header").load("../header.html")
    $("#for_footer").load("../footer.html")

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2.2,
        // spaceBetween: 10,
        autoplay: {
            delay: 3000,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
})
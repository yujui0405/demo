$(document).ready(function(){
    $("#for_header").load("../header.html")
    $("#for_footer").load("../footer.html")

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2.2,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px

            1200: {
                slidesPerView: 2.2,
            },
            990: {
                slidesPerView: 2,
            },
            830: {
                slidesPerView: 1,
            },
            430: {
                slidesPerView: 1,
            },
        }
    });
})
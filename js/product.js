$(document).ready(function(){
    $("#for_header").load("../header.html")
    $("#for_footer").load("../footer.html")
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 5.1,
        // spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
        }
    });

    $('.swiper-wrapper img').click(function(){
        let picSrc = $(this).attr('src');
        $('.big_img').attr('src',picSrc);
        $(this).addClass('active');
        $('.small_img').not(this).removeClass('active');
    });

})
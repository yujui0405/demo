$(document).ready(function(){
    let currentUrl = window.location.protocol + "//" + window.location.hostname 
    if(window.location.port){
        currentUrl += ":" + window.location.port
        $("#for_header").load(currentUrl + "/header.html")
        $("#for_footer").load(currentUrl + "/footer.html")
    }else{
        $("#for_header").load(currentUrl + "/demo/header.html")
        $("#for_footer").load(currentUrl + "/demo/footer.html")
    }
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
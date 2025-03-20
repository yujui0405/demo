$(document).ready(function(){

    console.log(window.location.protocol); // 协议，例如 "https:"
    console.log(window.location.hostname); // 主机名，例如 "www.example.com"
    console.log(window.location.port);     // 端口号，例如 "8080"（如果有）
    console.log(window.location.pathname); // 路径，例如 "/page"
    console.log(window.location.search);   // 查询字符串，例如 "?query=123"
    console.log(window.location.hash);     // 锚点，例如 "#section"
    // http://127.0.0.1:5500/index.html
    let currentUrl = window.location.protocol + "//" + window.location.hostname 
    if(window.location.port){
        currentUrl += ":" + window.location.port
    }
    console.log(currentUrl)
    // $("#for_header").load("../header.html")
    // $("#for_footer").load("../fooeter.html")
    $("#for_header").load(currentUrl + "/header.html")
    $("#for_footer").load(currentUrl + "/footer.html")

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
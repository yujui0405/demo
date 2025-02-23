$(document).ready(function(){
    //回到頁面最上面
    if('scrollRestoration' in history){
        history.scrollRestoration = 'manual'
    }
    $("#for_popup").load("../popLogin.html")
    $(".popup_click").click(()=>{
        $('#for_popup').toggleClass('for_popup_none')
        $('.overlay').toggleClass('overlay_show')
    })
    $('.overlay').click(()=>{
        $('.overlay').removeClass('overlay_show')
        $('#for_popup').toggleClass('for_popup_none')
    })
})
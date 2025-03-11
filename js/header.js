$(document).ready(function(){
    //回到頁面最上面
    if('scrollRestoration' in history){
        history.scrollRestoration = 'manual'
    }
    $(".popup_click").click(()=>{
        $("#for_popup").load("../popLogin.html")//要移到內部，才不會在網頁載入時，突然出現一點點又消失
        $('#for_popup').toggleClass('for_popup_none')
        $('.overlay').toggleClass('overlay_show')
    })
    $('.overlay').click(()=>{
        $('.overlay').removeClass('overlay_show')
        $('#for_popup').toggleClass('for_popup_none')
    })
})
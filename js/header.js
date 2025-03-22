$(document).ready(function(){
    //回到頁面最上面
    if('scrollRestoration' in history){
        history.scrollRestoration = 'manual'
    }

    //popup
    $(".popup_click").click(()=>{
        let currentUrl = window.location.protocol + "//" + window.location.hostname 
        if(window.location.port){
            currentUrl += ":" + window.location.port
            $("#for_popup").load(currentUrl + "/popLogin.html")//要移到內部，才不會在網頁載入時，突然出現一點點又消失
        }else{
            $("#for_popup").load(currentUrl + "/demo/popLogin.html")//要移到內部，才不會在網頁載入時，突然出現一點點又消失
        }
        
        $('#for_popup').toggleClass('for_popup_none')
        $('.overlay').toggleClass('overlay_show')
    })

    //遮罩和點擊遮罩關掉popup
    $('.overlay').click(()=>{
        $('.overlay').removeClass('overlay_show')
        $('#for_popup').toggleClass('for_popup_none')
    })
})
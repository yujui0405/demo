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

    //漢堡點擊動畫
    $('.hamburger').click(function(){
        $('.bar').toggleClass('active')
        $('.header_content').toggleClass('small_menu')
    })

    // $('header .header_center_content span span').click(function(){
    //     $(this).siblings('ul').slideToggle(500)
    // })

    function mobileMenu() {
        if($(window).width()<=830){
            $("header .header_center_content span span").off('click').on('click',function(){
                $(this).siblings('ul').stop(true,true).slideToggle(500)
            })
        } else {
            // 大於 830 時，移除 click，改由 hover 控制
            $("header .header_center_content span span").off('click')
            // 把 jQuery 動態加上的 style="display: block;"、style="display: none;" 清空
            $("header .header_center_content span ul").removeAttr("style")
        }
    }

    // 初始呼叫一次
    mobileMenu()

    // 視窗變化時也重新判斷
    $(window).resize(function(){
        mobileMenu()
    })
    
})
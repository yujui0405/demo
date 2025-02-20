$(document).ready(function(){
    let clicked_cat = 0
    let clicked_pro = 0
    let clicked_cost = 0
    let clicked_type = 0
    let up = `<i class="fa-solid fa-chevron-up"></i>`
    let down = `<i class="fa-solid fa-chevron-down"></i>`
    
    $('.category_btn').click(function(){
        clicked_cat++
        $(this).next().slideToggle(500)
        $(this).children()[1].remove()
        if(clicked_cat % 2 !== 0)
            $(this).append(down)
        else
            $(this).append(up)

    })
    $('.product_status').click(function(){
        clicked_pro++
        $(this).next().slideToggle(500)
        $(this).children()[1].remove()
        if(clicked_pro % 2 !== 0)
            $(this).append(down)
        else
            $(this).append(up)
    })
    $('.cost').click(function(){
        clicked_cost++
        $(this).next().slideToggle(500)
        $(this).children()[1].remove()
        if(clicked_cost % 2 !== 0)
            $(this).append(down)
        else
            $(this).append(up)
    })
    $('.cost_type').click(function(){
        clicked_type++
        $(this).next().slideToggle(500)
        $(this).children()[1].remove()
        if(clicked_type % 2 !== 0)
            $(this).append(down)
        else
            $(this).append(up)
    })


    $('#search').on('input',function(){
        let searchName = $(this).val()
        let cardHideCount = 0
        let wrongContent = `
                            <p>似乎沒有找到您到的商品!!</p>
                            `
        $('.card').each(function(){
            let cardTitle = $(this).children().children()[1].textContent
            
            if(cardTitle.includes(searchName)){
                $(this).show()
            }else{
                $(this).hide()
                cardHideCount ++ 
            }
            if(cardHideCount === 16){
                $('.wrapper').append(wrongContent)
            }
        })
    })
})
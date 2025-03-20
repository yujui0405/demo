$(document).ready(function(){

    //要寫在callback function內才找的到
    $("#for_header").load("../header.html",function(){
        $('#search').on('input',function(){
            let searchName = $(this).val()
            let cardHideCount = 0
            let wrongContent = `
                                <p class="no-item">似乎沒有找到您到的商品!!</p>
                                <img class="no-itemSearch" src="./img/all_products/no-item.png" alt="">
                                <p class="no-item">No Result Found</p>
                                <p class="no-item">We can't find any item matching your search</p>
                                
                                `
            $('.no-item').remove()
            $('.no-itemSearch').remove()
            $('.card').each(function(){
                let cardTitle = $(this).children().children()[1].textContent
                
                if(cardTitle.includes(searchName)){
                    $(this).show()
                }else{
                    $(this).hide()
                    cardHideCount ++ 
                }
                if(cardHideCount === 16){
                    $('.no-item').remove()
                    $('.no-itemSearch').remove()
                    $('.right_content').append(wrongContent)
                }
            })
        })
    })
    $("#for_footer").load("../footer.html")
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


    
})
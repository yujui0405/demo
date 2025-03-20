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
})
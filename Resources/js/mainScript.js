$(function(){
    let key = false;
    let slidebar = document.getElementById("sidebar");
    let content=document.getElementById("content");
    //for tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    //toggle sidebar
    $("#sidebar-toggle").on("click", function () {
        if(key == true){
            slidebar.classList.remove("hidden");
            slidebar.classList.add("animate__fadeInRight");
            slidebar.classList.remove("animate__fadeOutRight");
            key = false;
        }else{
            slidebar.classList.remove("animate__fadeInRight");
            slidebar.classList.add("animate__fadeOutRight");
            setTimeout(function(){
                slidebar.classList.add("hidden");
                content.setAttribute("width","100%");
            },300);
            
            key = true;
        }
        $("#wrapper").toggleClass("no-sidebar");
    });
    
});
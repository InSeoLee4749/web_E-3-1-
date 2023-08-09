$(document).ready(function(){

    setInterval(function(){
        $(".slide-wrapper").animate({"marginTop" : -820},400,function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-top",0)
        })
    },3000)
    
    $("#notice li").eq(0).click(function(){
        $(".pop").addClass("show")
    })
    $(".pop button").click(function(){
        $(".pop").removeClass("show")
    })

})
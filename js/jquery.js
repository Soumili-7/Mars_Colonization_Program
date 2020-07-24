
$(document).ready(function(){
    $(".field ul li").click(function(event){
        $('.active').removeClass('active');
        $(this).addClass('active');
        //event.preventDefault();
    });
});
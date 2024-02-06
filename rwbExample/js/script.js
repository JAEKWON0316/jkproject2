$(function(){
    $('.check-btn').click(function(){
        $('.check-btn').css("left", 0);
        $('.check-btn').css("top", 0);
        if($('.container').css("display") == "none"){
            $('.container').css('display', 'block');
        }
        else{
            $('.container').css('display', 'none');
            $('.check-btn').css("left", "50%");
            $('.check-btn').css("top", "calc(50% - 50px)");
        }
    });
   
   

}); //jqeury

// function login(){
//     if($('.container').css("display") == "none"){
//         $('.container').css('display', 'block');
//     }else{
//         $('.container').css('display', 'none');
//     }
// }
$(function(){

    $('.gnb').hover(function(){
        $('.lnb').toggle();
    });

    $('.tabnav>li').click(function(e){
        e.preventDefault();
        $('.tabnav>li').removeClass('active');
        const href = $(this).find('a').attr('href'); //갤러리와 노티스의 id값 href변수에 받음
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $(href).addClass('active');    
    });


}); //jquery
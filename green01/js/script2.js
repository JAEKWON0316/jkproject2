$(function(){
    $('.gnb>li>a').mouseenter(function(){
        $(this).css('background', '#434748')
                .css('color', '#fff');
        $('.lnbbox').fadeIn();
    });
    $('.lnbbox').mouseleave(function(){
        $('.gnb>li>a').css('background', 'transparent')
                        .css('color', '#434748');
        $(this).fadeOut();
    });

    setInterval(slideLeftRight, 3000); 
}); //jquery

function slideLeftRight(){ //함수명
    $('.slidein').animate({
        left: '-1200px' //1번째 이미지를 왼족으로 -1200만큼 애니메이션 한다.
    }, 1000, function(){ //이미지가 넘어가는속도가 1초
        //애니메이션이 끝나면 두 번재 이미지가 보이게 된다. 이때 첫 번째 이미지를
        //복제(clone)하여 마지막 순서로 만들고(appendTo) 첫 번째 이미지를 삭제하여(remove)
        //그 다음 이미지(2번째)가 1번째가 되게한다. 그리고 left를 초기화 해놓는다.(계속 -1200px씩 하니까.)
        $('.slidein img:eq(0)').clone().appendTo('.slidein'); //1번째거를 박스 끝에 붙혀줌
        $('.slidein img:eq(0)').remove(); //1번째거를 사라지게함
        $('.slidein').css("left", 0); // left을 0으로 바꿈 즉,, 123 순을 231로 바꿈
    });
}
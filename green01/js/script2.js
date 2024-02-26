$(function(){
    $('.gnb>li').hover(function(){
        $('.lnbbox').stop().fadeToggle();
        $('.lnb').stop().fadeToggle();
    });

    setInterval(slideLeftRight, 3000); //함수가 발동하는 시간

    $('.popup').click(function(e){
        e.preventDefault(); //a태그 기능 없애기
        $('.pop').fadeIn();
    });
    $('.close').click(function(){
        $('.pop').fadeOut();
    });

    $('.myfamily').change(function(){
        let $link = $(this).val(); //체인시했을 시 그 값의 value를 $link변수에 대입
        if($link){ //if true일 때 값이 있을 때
            window.location.href=$link; //window의 location(위치)의 주소값을 $link value로 한다.
        }
    });
}); //jquery

function slideLeftRight(){ //함수명
    $('.slidein').animate({
        left: '-1200px' //1번째 이미지를 왼족으로 -1200만큼 애니메이션 한다.
    }, 500, function(){ //이미지가 넘어가는속도가 0.5초
        //애니메이션이 끝나면 두 번재 이미지가 보이게 된다. 이때 첫 번째 이미지를
        //복제(clone)하여 마지막 순서로 만들고(appendTo) 첫 번째 이미지를 삭제하여(remove)
        //그 다음 이미지(2번째)가 1번째가 되게한다. 그리고 left를 초기화 해놓는다.(계속 -1200px씩 하니까.)
        $('.slidein img:eq(0)').clone().appendTo('.slidein'); //1번째거를 박스 끝에 붙혀줌
        $('.slidein img:eq(0)').remove(); //1번째거를 사라지게함
        $('.slidein').css("left", 0); // left을 0으로 바꿈 즉,, 123 순을 231로 바꿈
    });
}
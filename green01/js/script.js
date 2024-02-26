$(function(){
    // $('.gnb').hover(function(){
    //     $('.lnb').toggle();
    //     $('.lnb-box').toggle();
    // });

    setInterval(slideUpDown, 3000); 

}); //jquery

function slideUpDown(){ //함수명
    $('.heroin').animate({
        left: '-300px' //1번째 이미지를 왼족으로 -300만큼 애니메이션 한다.
    }, 300, function(){ //이미지가 넘어가는속도가 0.3초
        //애니메이션이 끝나면 두 번재 이미지가 보이게 된다. 이때 첫 번째 이미지를
        //복제(clone)하여 마지막 순서로 만들고(appendTo) 첫 번째 이미지를 삭제하여(remove)
        //그 다음 이미지(2번째)가 1번째가 되게한다. 그리고 top을 초기화 해놓는다.(계속 -300px씩 하니까.)
        $('.heroin img:eq(0)').clone().addenTo('.heroin'); //1번째거를 박스 끝에 붙혀줌
        $('.heroin img:eq(0)').remove(); //1번째거를 사라지게함
        $('.heroin').css("top", 0); // 탑을 0으로 바꿈 즉,, 123 순을 231로 바꿈
    });
}
$(function(){
    $(".submit").click(function(){
        if($("#username").val() == ""){
            alert("이름을 입력하세요.");
            $("#username").focus();
            return;
        }
        $("#loginform").submit();
    });

    $("#talk").on("keyup", function(e){ //엔터치면 바로 가는 이벤트 keyup
        //console.log(e.keyCode); //keyCode로 확인한 엔터값의 코드는 13번
        if(e.keyCode == 13){
            

        }
    });
}); //jquery
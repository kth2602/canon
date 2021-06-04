$(function(){
    // 메뉴
    $(".sub").hide();

    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//

    // 슬라이드이미지
    // var n = 0; // 0 1 2 

    // setInterval(function(){
    //     // if(n < 2){
    //     //     n++;
    //     // } else{
    //     //     n=0;
    // n = n+1
    //     // }
    //     n = ( n + 1 ) % 3;

    //     $(".move").animate({left : n * (-1200) +"px" }, 500)

    // }, 2500)

    setInterval(function(){
        $(".move").animate({left : "-=1200"}, 500, function(){
            $(".move").append( $(".move li:first"));
            $(".move").css("left", "0")
        })
    }, 2500)//



    // 탭

    $(".notice_gallery h2").click(function(){
        $(".notice_gallery h2").removeClass("on");
        $(this).addClass("on");
        $(".notice_gallery ul").hide();
        $(this).next().show();
    })//


    // 팝업

    $(".click").click(function(){
        $(".popup").show();
    })//

    $(".close").click(function(){
        $(".popup").hide()
    })
    

})//jquery
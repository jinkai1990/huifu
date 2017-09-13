
   $(function() {
   	  //二级头部点击样式
       $('.nav_ul li').click(function(){
       	$(this).addClass('active').siblings('li').removeClass('active');
       });
        });
    $(function() {       
         $(".top").html();
          $("#izl_rmenu").each(function(){
                 $(this).find(".btn_top").click(function(){
                    $("html, body").animate({
                        "scroll-top":0
                    },"fast");
                });           
          })
   });

     //导航栏固定
     $(function() {
    $(window).scroll(function() {
        if($(window).scrollTop()>=150){
            $(".header_a ").addClass("header_nav_fixed");

        }else{
            $(".header_nav_fixed").addClass("header_a").removeClass("header_nav_fixed");
           
        }
    });
    }); 



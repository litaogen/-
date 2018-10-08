$(document).ready(function(){



// 头部
(function () { 
    // 货币切换
    $(".slide-help select").on("change",function(){
        var helpText=$('.slide-help select option:selected').text();
        $(".slide-help-name span").html(helpText);
    });
    // 头部搜索
    $(".header-l .icon-fangdajing").on('click', function() {
        $(".header-search").show();
        $(".search-sty").focus()
    });
    
    $(".header-search-b .icon-guanbi").on('click', function() {
        $(".header-search").hide();
    });

// 头像侧边栏
  $('.header-l .icon-renwu-ren').on('click', function(e){
    var wh = $('div.wrapper').height();
    $('div.slide-mask').css('height', wh).show();
    $('div.slide-wrapper').css('height', wh).addClass('moved');
  });
  
  $('div.slide-mask').on('click', function(){
    $('div.slide-mask').hide();
    $('div.slide-wrapper').removeClass('moved');
  });

  var winHeight=$(window).height();
  $(".slide-mask").css({"min-height":winHeight});
  $(".slide-wrapper").css({"min-height":winHeight});

} ()); 


// 尾部
(function () { 
    $(".footer-list h3").on('click',function(){
        $(this).children('span').toggleClass('current');
        $(this).siblings('.footer-list-nav').stop().slideToggle(300);
    })
} ()); 


// 添加喜欢功能  未登入需要先登入
// 这里需要后台确认成功后 才会变成红色心
(function () { 
    $(".my-live").on('click',function(event) {
        var _t=$(this)
        var _tLove=$(this).children('.icon-xin')
        if(_tLove.hasClass('current')){
            _t.children().removeClass('current')
        }else{
            _t.children().addClass('current')
        }
    });
} ()); 



});
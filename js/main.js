//ハンバーガーメニュー//
$(function(){
  $('.drawer_btn').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.drawer_nav').removeClass('open');
    }else{
      $(this).addClass('active');
      $('.drawer_nav').addClass('open');
    }
  });
});
//ページ内リンク//
$(function(){
  $('a[href^="#').click(function(){
    const adjust = -118;
    const speed = 600;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? ' html' :href);
    const position = target.offset().top + adjust;
    $ ('body,html').animate({scrollTop:position},speed,'swing');
    return false;
  });
});
//appのhoverイベント//
$(function(){
  $('.app-icon').hover(
  function(){
    $(this).next('.text-contents').addClass('text-active');
  },
  function(){
    $(this).next('.text-contents').removeClass('text-active');
  })
})
//snsアイコンのhoverイベント//
$(function(){
  $('.social-icon').hover(
  function(){
    $(this).find('i').animate({
      'font-size':'65px'
    },200);
  },
  function(){
    $(this).find('i').animate({
      'font-size':'60px'
    },200);
  })
})
$('.slidedwon').on('click',function(){
  const accordion = $('.accordion')
  if(accordion.hasClass('open')){
    accordion.removeClass('open')
    accordion.slideDown();
  }else {
    accordion.addClass('open')
    accordion.slideUp();
    
  }
    
})
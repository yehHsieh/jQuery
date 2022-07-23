$(document).ready(function (){$('.nav li>a').click(function(event){
  $(this).toggleClass("active");
  $(this).parent().find('ul').slideToggle();
  $(this).parent().siblings().find('ul').slideUp();
  $(this).parent().siblings().find('a').removeClass("active");
})

  // swiper輪播效果
  const swiper = new Swiper('.swiper', {
    // Optional parameters 
    direction: 'horizontal', //輪播可選擇垂直或水平的設計
    loop: true,
    // 自動播放輪播
    autoplay: {
        delay: 3000,
    },
    speed:2000,
    effect: 'slide',
    // 如果需要pagination分頁設計
    pagination: {
        el: '.swiper-pagination',
    },

    // 上一個/下一個 按鈕
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
})

})


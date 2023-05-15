$(function(){
    // 서브 메뉴창
$('.gnb').hover(function(){
    $('.gnb ul').stop().fadeIn()
    $('.gnb').addClass('active')
}, function(){
    $('.gnb ul').stop().fadeOut('fast')
    $('.gnb').removeClass('active')
})

// 좌우 슬라이드
setInterval(function(){
    $('.slide').animate({left: -1200}, 'slow', function(){
        $('.slide img:first').appendTo($('.slide'))
        $('.slide').css('left', 0)
    })
},2700)


// 모달
$('.notice li a:first').click(function(){
    $('#modal').addClass('active')
})
$('#modal .close').click(function(){
    $('#modal').removeClass('active')
})
})
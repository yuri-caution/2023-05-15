$(function(){
    // 서브 메뉴창
$('.gnb').hover(function(){
    $('.gnb ul').stop().fadeIn()
}, function(){
    $('.gnb ul').stop().fadeOut()
})

// 상하 슬라이드
setInterval(function(){
    $('.slide').animate({top: -300}, function(){
        $('.slide img:first').appendTo($('.slide'))
        $('.slide').css('top', 0)
    })
},2700)

// 탭 전환
$('.tab_tit h3').click(function(){
    $('.tab_tit h3.on').removeClass('on')
    $(this).addClass('on')

    $('.tab_cont ul').css('display', 'none')
    $('.tab_cont ul').eq($(this).index()).css('display', 'block')
})

// 모달
$('.notice li a:first').click(function(){
    $('#modal').addClass('active')
})
$('#modal .close').click(function(){
    $('#modal').removeClass('active')
})
})
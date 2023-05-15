$(function(){
    // 서브 메뉴창
$('.gnb').hover(function(){
    $('.gnb ul').stop().fadeIn()
    $('.gnb').addClass('active')
}, function(){
    $('.gnb ul').stop().fadeOut()
    $('.gnb').removeClass('active')
})

// Fade로 슬라이드
var index = 0
$('.slide div').eq(index).show()
setInterval(function(){
    var nextIndex = (index+1) % 3
    $('.slide div').eq(index).fadeOut()
    $('.slide div').eq(nextIndex).fadeIn()
    index = nextIndex
},2700)


// 모달
$('.notice li a:first').click(function(){
    $('#modal').addClass('active')
})
$('#modal .close').click(function(){
    $('#modal').removeClass('active')
})
})
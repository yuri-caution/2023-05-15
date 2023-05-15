$(function(){
    // 서브 메뉴창
    $('.gnb>li').hover(function(){
        $(this).find('ul').stop().fadeIn()
    }, function(){
        $(this).find('ul').stop().fadeOut()
    })

    // 슬라이드 Fade
    var index = 0
    $('.slide div').eq(index).show()

    setInterval(function(){
       var nextIndex = (index + 1) % 3
       $('.slide div').eq(index).fadeOut()
       $('.slide div').eq(nextIndex).fadeIn()
       index = nextIndex
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
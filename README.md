# 웹디자인기능사 기출문제
## a_01 탭 전환
```
// 탭 전환
$('.tab_tit h3').click(function(){
    $('.tab_tit h3.on').removeClass('on')
    $(this).addClass('on')

    $('.tab_cont ul').css('display', 'none')
    $('.tab_cont ul').eq($(this).index()).css('display', 'block')
})
```

## a_02 메뉴창
```
.gnb {
    display: flex;
    position: relative;
    z-index: 1;
}

.gnb::after {
    content: '';
    position: absolute;
    top: 100px;
    right: 0;
    height: 0;
    width: 1200px;
    background-color: #ffffff;
    transition: all 0.3s;
}

.gnb.active::after {
    height: 200px;
}
```

## a_03 메뉴창
```
// 서브 메뉴창
    $('.gnb>li').hover(function(){
        $(this).find('ul').stop().fadeIn()
    }, function(){
        $(this).find('ul').stop().fadeOut()
    })
```

## a_03 Fade로 슬라이드
```
// 슬라이드 Fade
    var index = 0
    $('.slide div').eq(index).show()

    setInterval(function(){
       var nextIndex = (index + 1) % 3
       $('.slide div').eq(index).fadeOut()
       $('.slide div').eq(nextIndex).fadeIn()
       index = nextIndex
    },2700)
``` 
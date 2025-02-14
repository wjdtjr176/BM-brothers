



$('#header .nav-item .sub li:first-child').addClass('on').siblings().removeClass('on');

$('#header .nav-item').hover(function(){

    if($(this).find('.sub').length){
        $('header').addClass('hover');
        $(this).find('.sub').addClass('on');
    }
},function(){
    $('header').removeClass('hover');
    $(this).find('.sub').removeClass('on');
    $('#header .nav-item .sub li:first-child').addClass('on').siblings().removeClass('on');
})

$('#header .nav-item .sub li').hover(function(){
    $(this).addClass('on').siblings().removeClass('on');
})












$('.btn-lang button').click(function(){
    $(this).removeClass('on').siblings().addClass('on')
})


// 반응형
$('.btn-menu').click(function(){
    $('.side-menu').addClass('on');
    $('body').addClass('no-scroll');
})

$('.side-menu .btn-slide').click(function(){
    $(this).parent().siblings().toggleClass('on')
})

$('#header .side-menu .btn-close').click(function(){
    $('.side-menu').removeClass('on');
    $('body').removeClass('no-scroll');
})










$('.group-relate .btn-up').click(function(){
    $('#footer .group-relate').toggleClass('on');
})
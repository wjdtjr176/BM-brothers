




const mainSlide = new Swiper('.sc-visual .swiper',{
    autoplay:{
        delay:5000,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
});


const storySlide = new Swiper('.sc-story .swiper',{
   slidesPerView:'auto',
   spaceBetween:16,
   autoplay:{
    delay:0,
    disableOnInteraction:false,
   },
   speed:2000,
   loop:true,
});



$('.sc-story .swiper').hover(function(){
    storySlide.autoplay.stop();
},function(){
    storySlide.autoplay.start();
});



const video = document.getElementById('myvideo')
$('.sc-intro .btn-autoplay').click(function(){
    if ($(this).hasClass('on')) {
        $('.sc-intro video').get(0).currentTime = 0;
        $('.sc-intro video').get(0).play();
    } else {
        $('.sc-intro video').get(0).pause();
    }
    $(this).toggleClass('on')
})
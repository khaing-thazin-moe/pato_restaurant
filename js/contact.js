// console.log("hello world");

// start jquery area
$(window).on("load",function(){
    $("#preloader").delay(600).fadeOut();
})
$(document).ready(function(){
    // console.log("helloworld");
    // start nav side bar
    $(".navbar_toggle").click(function(){
        $(".navbar_slide_list_group").addClass("active");
    })
    $(".close_navbar_slide_btn").click(function(){
        $(".navbar_slide_list_group").removeClass("active");
    })

    $(window).on("scroll",function(){
        let scrollAmount = $(this).scrollTop();

        if(scrollAmount > 0){
            $("nav").addClass("active");
            // console.log($("nav .nav-brand img"))
            $("nav .nav-brand img").attr("src","./assets/imgs/logos/logo2.png.webp");
        }else{
            $("nav").removeClass("active");
            // console.log($("nav .nav-brand img"))
            $("nav .nav-brand img").attr("src","./assets/imgs/logos/logo.png.webp");
        }
    })

    // start nav side bar

    // img zoom 
    $('.footer_imgs_gallery,.nav_gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
      
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
      
          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        },
        gallery: {
            enabled: true, // set to true to enable gallery
          
            preload: [0,2], // read about this option in next Lazy-loading section
          
            navigateByImgClick: true,
          
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
          }
      
      });
})

// end jquery area

window.addEventListener("click",function(e){
    if(e.target.classList.contains("navbar_toggle")){
        this.document.querySelector(".navbar_slide_list_group").classList.add("active");
    
    }else{
        this.document.querySelector(".navbar_slide_list_group").classList.remove("active");
    }
    
})


// start wow js
new WOW().init();
// end wow js
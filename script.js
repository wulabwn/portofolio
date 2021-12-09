$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }

    });


    // slide button 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })

// -------------------------------------------------------






//-------------------------------------------------------



    // ini buat toggle menu bar/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
       
        
        
  
    });


    $('.x ').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
       
        
        
    });


//     $('.menu-btn').click(function(){
//         $('.navbar .menu').removeClass('active');
//         $(this).addClass('active');
//   });

    // $(document).ready(function() {
    //     $('.menu-btn').on('click', function() {
    //       $('.menu-btn').find('.active').removeClass('active');
    //       $(this).addClass('active');
    //     });
    //   });

        // typed animated

    var typed = new Typed(".typing",{
        strings:["freelancer", "Developer ", "Tester" ],
        typedSpeed: 290000009999999,
        backspeed:100000000000000,
        loop:true
    });

    var typed = new Typed(".typeddd",{
        strings:["freelancer", "Developer ", "Tester" ],
        typedSpeed: 290,
        backspeed:100,
        loop:true
    });



    // owl carousel code dari javascript
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }


    });


});
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         margin:10,
//         autoplay: true,
//         autoplayTimeout:2000,
//         loop:true,
//         autoplayHoverPause:true,
//         responsive:{
//             0:{
//                 item:2
//             },
//             600:{
//                 item:4
//             },
//             1000:{
//                 item:5
//             },
//         }
//     });
//   });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout:2000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
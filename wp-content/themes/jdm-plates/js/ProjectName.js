(function ($) {
  'use strict';
  AOS.init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});


$("#PlateList ul li > a").click(function(){
  var $this = $(this);
  $this.next(".under").toggleClass("active");  
});

$(".under > a.SeeMore").click(function(){
  $(this).parents(".under").removeClass("active");
});



// $(".reg").click(function(){
//   $(".under").toggleClass("active");
// });

// $(".reg").click(function(){
//   $(this).toggleClass("add");
// });

// $(".SeeMore").click(function(){
//   $(".under").removeClass("active");
// });





// $(".size").click(function(){
//   $(".under-size").toggleClass("active");
// });

// $(".size").click(function(){
//   $(this).toggleClass("add");
// });

// $(".SeeMore").click(function(){
//   $(".under-size").removeClass("active");
// });


// $('.SeeMore').click(function() {
//   var $this = $(this);
//   $this.toggleClass('SeeMore');
//   if ($this.hasClass('SeeMore')) {
//       $this.text('1 Your Reg');
//   } else {
//       $this.text('Back To The Builder');
//   }
// })







  //Avoid pinch zoom on iOS
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  }, false);
})(jQuery)
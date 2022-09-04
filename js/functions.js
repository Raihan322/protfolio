
/** wow box js codding **/
wow = new WOW(
    {
      animateClass: 'animated',
      offset:0,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
wow.init();

/** gallery js **/
(function() {
  var $gallery = new SimpleLightbox('.gallery a', {});
})();

/**slick slider blog**/
$('.test-slider-slick').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    infinite: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

});

$(document).on('ready', function() {

 
  //top up button design js
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
   
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});

/**slick slider single room**/
$('.room-text-slider').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    infinite: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

});

//single room extra services section design js

$('.tab-nav li').click(function(){
  $('.tab-nav li').removeClass('active1');
  $(this).addClass('active1');

  index = $(this).index();
  $('.single-tab').hide();
  $('.single-tab').eq(index).show();
});

//counter section js 
$('.counter').counterUp({
  delay: 15,
  time: 2000
});
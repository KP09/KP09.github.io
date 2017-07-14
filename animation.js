$(document).ready(function(){
  // $(document).on("scroll", onScroll);

  // Works the menu tabs on the left of the page
  $('.nav-tab').on('click', function(){
    $('.nav-tab').removeClass('active');
    $(this).addClass('active');
  });

  // Smooth scrol
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 300);
    return false;
  });
})

// function onScroll(){
//   var scrollPos = $(document).scrollTop();
//   $('.nav-tabs a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//           $('.nav-tab').removeClass("active");
//           currLink.children('div').addClass("active");
//       }
//       else{
//           currLink.children('div').removeClass("active");
//       }
//   });
// };

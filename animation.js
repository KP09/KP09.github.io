$(document).ready(function(){

  // Works the menu tabs on the left of the page
  $('.nav-tab').on('click', function(){
    $('.nav-tab').removeClass('active');
    $(this).addClass('active');
  })

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 300);
    return false;
});

})

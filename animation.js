$(document).ready(function(){

  // Works the menu tabs on the left of the page
  $('.nav-tab').on('click', function(){
    $('.nav-tab').removeClass('active');
    $(this).addClass('active');
  })

  // Aid to scroll smoothly to selected anchor
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'medium');
  }

  // Scrolls to the right anchor
  $("#about").click(function() {
      event.preventDefault();
      scrollToAnchor('about');
    });

  $("#stack").click(function() {
      event.preventDefault();
      scrollToAnchor('stack');
    });
})

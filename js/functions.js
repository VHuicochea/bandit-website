/*global jQuery */
/* Contents
// ------------------------------------------------>
    1. NAVBAR ACTIVE

	2.  BACKGROUND INSERT
	9.  OWL CAROUSEL
	10. MAGNIFIC POPUP
	11. MAGNIFIC POPUP VIDEO
	14. SCROLL TO
	15. NAVABR TOGGLER
    16. PRICING FILTER
    9. AJAX MAILCHIMP
    10. AJAX CAMPAIGN MONITOR
    11. AJAX CONTACT FORM

*/

$(document).ready(function(){

    /* Fades in page on load */
    $('.fade-first').fadeIn(600).removeClass('fade-first');
    $('.fade-second').fadeIn(1000).removeClass('fade-second');
    $('.fade-third').fadeIn(1500).removeClass('fade-third');

    $('.fade-special').fadeIn(1500).removeClass('fade-third').css("display", "flex");
});

/* ------------------  Navbar Active ------------------ */
$(document).ready(function(){
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});
   
/* ------------------  Team Active ------------------ */
$(document).ready(function(){
    $(".teams a").on("click", function(e){
        e.preventDefault();
        $(".teams").find(".active").removeClass("active");
        $(this).parent().addClass("active");

        var team = this.innerHTML;
        $(".team-profiles").find(".active").hide();
        $(".team-profiles").find(".active").removeClass("active");
        $(".team-profiles").find("." + team).addClass("active");
        $(".team-profiles").find("." + team).fadeIn(800);
    });
});

/* ------------------  Carousel ------------------ */
$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });

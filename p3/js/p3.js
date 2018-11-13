// alert("Breathe In & Out With The Circles")

$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #FF1BE6, #1E00E7)');
});



$(document).ready(function() {
$(".sphere h1").hover( function() {
    $(this).toggleClass("highLight");
    $(this).html("Breathe  In").fadeOut(35000);
}

, function() {
    $(this).toggleClass("highLight");
    $(this).html("Breathe  Out"); 
});
})

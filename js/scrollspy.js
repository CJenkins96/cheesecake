$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})


// Problem: user when clicking on image goes to dead end
// Solution: Create overlay with the large image

var $XyzSummon = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$XyzSummon.append($image);

// Add overlay
$("body").append($XyzSummon);
    // An image
    // A caption
$XyzSummon.append($caption);

// capture click event on a to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    // Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    
    // Show the overlay
    $XyzSummon.show();
    
    // Get child's alt atribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

// When overlay is clicked
$XyzSummon.click(function(){
    // Hide the overlay
    $XyzSummon.hide();
});

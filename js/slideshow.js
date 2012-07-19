<script type="text/javascript">
$(document).ready(function () {

  // BACKGROUND GRAPHIC SLIDESHOW

  // trackers and variables
  var $theSlides = [ $('.bg_slideshow li'); ];
  var $slideCounter = ;
  var $slideImg = $('.bg_slideshow img');
  var $slideLink = $('.bg_slideshow a');
  var $currentZindex = ;
  var $slideDelay = 3000;
  var $animationDuration = 1000;

  var $slideSrc = $('.bg_slideshow img').attr('src');


      function makeBgSlides() {
            $('.bg_slideshow img').each(function(i, elem) {
                var img = $(elem);
                var div = $("<div />").css({
                  background: "url(" + img.attr("src") + ") no-repeat",
                  width: img.width() + "px",
                  height: img.height() + "px"
                });

                div.html(img.attr("alt"));
                div.addClass("replacedImage");
                img.replaceWith(div);
              });
          });


    });



</script>>
$(document).ready(function(){
  var imgRatioCache = {};
  function fitImages() {
    $.each($(".fit"), function() {
      var bgimg = $(this).css('background-image' );
      bgimg = bgimg.replace('url(','').replace(')','');
      var divToResize = $(this);

      var imgKey = bgimg;
      if( imgRatioCache[imgKey] != null ) {
        divToResize.height( imgRatioCache[imgKey] * divToResize.width() );
      }
      else {
        var i = new Image();
        i.onload = function () {
          var h = i.height;
          var w = i.width;
          var ratio = 1.0*h/w;
          divToResize.height( ratio*divToResize.width() );
          imgRatioCache[imgKey] = ratio;
        }
        i.src = bgimg;
      }
    });
  };
  fitImages();
  $( window ).resize(function() {
    fitImages();
  });
});

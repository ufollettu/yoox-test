//slideshow commands//
$('.slideshow').each( function() {
  var $slideshow = $(this);
  $slideshow.imagesLoaded( function() {
    $slideshow.skidder({
      slideClass    : '.slide',
      scaleSlides   : true,
      maxSlideWidth : 1300,
      maxSlideHeight: 500,
      paging        : true,
      autoPaging    : true,
      pagingWrapper : ".skidder-pager",
      pagingElement : ".skidder-pager-dot",
      swiping       : true,
      leftaligned   : false,
      cycle         : true,
      jumpback      : false,
      speed         : 400,
      autoplay      : true,
      autoplayResume: true,
      interval      : 2000,
      transition    : "slide",
      afterSliding  : function() {},
      afterInit     : function() {}
    });
  });
});
$(window).smartresize(function(){
  $('.slideshow').skidder('resize');
});

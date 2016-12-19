var oTurn = $('#flipbook').turn({
    autoCenter: false,
    width: 1172,
    height: 800,
    // page:1,
    // acceleration: true,
    // elevation: 1,
    next: true,
 });


$("#prev").click(function(e){
    e.preventDefault();
    oTurn.turn("previous");
});

$("#next").click(function(e){
    e.preventDefault();
    oTurn.turn("next");
});

$("#prev").hide();
$("#flipbook").bind("turning", function(event, page, view) {
  $("#prev").show();
  $("#next").show();
});

$("#flipbook").bind("first", function(event) {
  $("#prev").hide();
});

$("#flipbook").bind("last", function(event) {
  $("#next").hide();
});

$("#zoom-viewport").zoom({
  flipbook: $("#flipbook"),
  max: 3
});

$("#zoom-view").bind("zoom.doubleTap", function(event) {
  if ($(this).zoom("value")==1) {
    $(this).zoom("zoomIn", event);
  } else {
    $(this).zoom("zoomOut");
  }
});





// $("#flipbook").bind("first", function(event) {
//    $("#prev").hide(); 
// });


// $("#flipbook").bind("turning", function(event, page, view) {
// if (page ===1) {
//   $("#prev").hide(); 
//   console.log('hide'); 
// } else {
//   $("#prev").show();
//  console.log('show');
// }
// });

// if($('#flipbook').turn('page')<=2){
//     $("#prev").hide();
//     console.log("entre1");
// }else{
//   $("#prev").show();
//   console.log("entre2");
// }

// $("#flipbook").bind("turning", function(event, page, view) {
//   console("Turning the page to: "+page);
// });


/*==========================================*/ 


// $('a').magnificPopup({
//         type: 'image',
//         closeBtnInside: false,
//     closeOnContentClick: true,
//   tLoading: '', // remove text from preloader
  
//    don't add this part, it's just to disable cache on image and test loading indicator 
//   callbacks: {
//     beforeChange: function() {
//      this.items[0].src = this.items[0].src + '?=' + Math.random(); 
//     }
//   }
  
  
//     });








// $('.zoom-viewport').zoom('zoomIn', 1.5);

// $('.zoom-magazine').click(function(e){
//   var pos = {
//     x: e.pageX - $(this).offset().left,
//     y: e.pageY - $(this).offset().top
//   };
//   $('flipbook').zoom('zoomIn', pos);
// });

// $(".zoom-magazine").zoom ({
//   flipbook: $('#viewer'),
//   max: 2
// });

// var _width = $('.container').width();
// var  _height = Math.round(70.909090909/100*_width);
// var _winWidth = $(window).width();
// var _winHeight = $(window).height();

// $('.zoom-magazine').click(function(e){
//   e.preventDefault();
//   $('#flipbook').turn('zoom',1.5);
// });

// $('zoom-viewport').zoom({
// 	flipbook: $('.magazine')
// }); 

  //Initialize the zoom viewport
    // $('.zoom-viewport').zoom({
    //         flipbook: $('.magazine')
    // });

    //Binds the single tap event to the zoom function
    // $('.zoom-viewport').bind('zoom.tap', zoomTo);

    //Optional, calls the resize function when the window changes, useful when viewing on tablet or mobile phones
    // $(window).resize(function() {
    //     resizeViewport();
    // }).bind('orientationchange', function() {
    //     resizeViewport();
    // });

    //Must be called initially to setup the size
    // resizeViewport();

// function zoomTo(event) {       
//         setTimeout(function() {
//             if ($('.zoom-viewport').data().regionClicked) {
//                 $('.zoom-viewport').data().regionClicked = false;
//             } else {
//                 if ($('.zoom-viewport').zoom('value')==1) {
//                     $('.zoom-viewport').zoom('zoomIn', event);
//                 } else {
//                     $('.zoom-viewport').zoom('zoomOut');
//                 }
//             }
//         }, 1);
// }

// function resizeViewport() {
//     var width = $(window).width(),
//         height = $(window).height(),
//         options = $('.magazine').turn('options');

//     $('.zoom-viewport').css({
//         width: width,
//         height: height
//     }).zoom('resize');
// }


// $("#flipbook").turn("zoom", 1);

 // $('#flipbook').turn({
  // gradients: true,
  // width: 1172,
  // height: 800,
  // autoCenter: true,
  // page:1,
  // elevation: 50,
  // acceleration: true
 // });

 //  $('#flipbook').turn({
 //  gradients: true,
 //  width: 1172,
 //  height: 800,
 //  page:1,
 //  elevation: 50
 //  acceleration: true,
 //  autoCenter: true,
 // });

// $("#flipbook").turn({
// 	width: 1172,
// 	height: 800,
// 	autoCenter: true
// });

//    $("#flipbook").turn({
//     width: 1172,
//     height: 800,
//     autoCenter: true
// });

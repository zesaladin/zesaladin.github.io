 $(document).ready(function(){

   $(".overlay").css("transform", "scale(0)");
var rot = 0;
var size=1;
var wid=0;
var high=0;
var played=false;
   $("#hawk").click(function(){
     // alert ('clicked');
     rot+=10;
     $("#hawk").css("transform", "rotate("+rot+"deg)")
   });
   $("#Steph").click(function(){
     // alert ('clicked');
     size+=.1;
     if (size > 2) {
    size=1;
  }
     $("#Steph").css("transform", "scale("+size+")")
   });

   $("#James").click(function(){
     // alert ('clicked');
     wid+=100;
     high+=50;
     if (wid > 400) {
    wid=0;
  }
    if (high>200) {
      high=0;
    }
     $(".testpop").css("width", wid+"%")
     $(".testpop").css("height", high+"%")
   });
   $("#frame").click(function(){
     played==true;
     alert ('click')

   });
   $(".video").hover(function(){
     // alert ('clicked');

     $(".video").css("opacity", "1")
   }, function(){
     if (played==false) {
       // alert ('idk');
       $(".video").css("opacity", ".1")
     }
   }
 );
 var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);
  player.on('play', function() {
    played=true;
  });

 });
//   $("img").click(function(){
//     alert("The paragraph was clicked.");
//     });
//   });
//
// var rotation = 0;
//
//
//
//
//     alert ('test');
//
// function arotation (obj) {
//   element.style.transform = 'rotate(90deg)';
// }

//     function GoneEvent(obj) {
//     $('#hawk').css({'transform' : 'rotate'+ 90 +'(deg)'});
//     return $(this);
// };
//
// $('.rotate').click(function() {
//     rotation += 5;
//     $(this).rotate(rotation);
// });

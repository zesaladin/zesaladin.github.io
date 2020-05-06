 $(document).ready(function(){
// document.body.style.cursor = "wait";
   $(".overlay").css("transform", "scale(0)");

var scle=0;
var rot = 0;
var size=1;
var wid=0;
var high=0;
var wid2=0;
var high2=0;
var wid3=0;
var high3=0;
var wid1=0;
var high1=0;
var wid4=0;
var high4=0;
var wid5=0;
var high5=0;
var played=false;
var hugh=0;
var carleft=300;
var duckR=480;
var moveR=0;


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

   $("#Eater").click(function(){
     // alert ('clicked');
     hugh+=30;
     $("#Eater").css("filter", "hue-rotate("+hugh+"deg)");


     wid4+=130;
     high4+=50;
     if (wid4 > 650) {
    wid4=0;
    high4=0;
     }

    if (wid4==650) {
      $(".testpop4").css("background", "#92d49f")
     }
     else {
       $(".testpop4").css("background", "grey")
     }

     $(".testpop4").css("width", wid4+"px")
     $(".testpop4").css("height", high4+"px")

   });
   $("#hawk").click(function(){
     // alert ('clicked');
     rot+=15;
     $("#hawk").css("transform", "rotate("+rot+"deg)");

     wid1+=40;
     high1+=60;
     if (high1 > 300) {
    wid1=0;
    high1=0;
     }

    if (wid1==200) {
      $(".testpop1").css("background", "#92d49f")
     }
     else {
       $(".testpop1").css("background", "grey")
     }

     $(".testpop1").css("width", wid1+"px")
     $(".testpop1").css("height", high1+"px")


   });
   $("#Steph").click(function(){
     // alert ('clicked');
     size+=.1;
     if (size > 1.7) {
    size=1;
  }
     $("#Steph").css("transform", "scale("+size+")");

     wid3+=5;
     high3+=4;
     if (wid3 > 30) {
    wid3=0;
    high3=0;
     }

    if (wid3==30) {
      $(".testpop3").css("background", "#92d49f")
     }
     else {
       $(".testpop3").css("background", "grey")
     }

     $(".testpop3").css("width", wid3+"%")
     $(".testpop3").css("height", high3+"%")

   });

   $("#James").click(function(){
     // alert ('clicked');
     wid+=100;
     high+=50;
     if (wid > 600) {
    wid=0;
    high=0;
     }

    if (high>250) {
      high=250;
     }
     if (wid==600) {
       $(".testpop").css("background", "#2d6139")
      }
      else {
        $(".testpop").css("background", "grey")
      }
     $(".testpop").css("width", wid+"%")
     $(".testpop").css("height", high+"%")

   });

   $("#cardinal").click(function(){

     var random = getRandomInt(-30,300);

     $("#cardinal").css("left", carleft+random+"px")
     // alert ('clicked');
     wid2+=100;
     high2+=50;
     if (wid2 > 600) {
    wid2=0;
    high2=0;
     }
     if (wid2==600) {
       $(".testpop2").css("background", "#B4F4B6")
      }
      else {
        $(".testpop2").css("background", "grey")
      }
     $(".testpop2").css("width", wid2+"%")
     $(".testpop2").css("height", high2+"%")

   });

   $("#duck").click(function(){
     // alert ('clicked');
     var audio = document.getElementById("audio");
     audio.play();
     moveR-=10;
     $("#duck").css("right", duckR+moveR+"px")

    //
    //  wid5+=140;
    //  high5+=50;
    //  if (wid5 > 700) {
    // wid5=0;
    // high5=0;
    //  }
    //  if (wid5==700) {
    //    $(".testpop5").css("background", "#92d49f")
    //   }
    //   else {
    //     $(".testpop5").css("background", "grey")
    //   }
    //  $(".testpop5").css("width", wid5+"%")
    //  $(".testpop5").css("height", high5+"%")

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

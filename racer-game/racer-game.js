// window.onload = function(){
//
//   startGame();
//   var car1 = document.getElementById('car1');
//   var car2 = document.getElementById('car2');
//   //set the left to 0 first
//   document.getElementById("car1").style.left = 0 + "px";
//   document.getElementById("car2").style.left = 0 + "px";
//
//
// }

// JAVASCRIPT

// document.getElementById("racer-game").onclick = function()
// {
//   console.log("we in the game");
//
// };

// JQUERYY
// $("#racer-game").on("click", function(){
//   console.log("we in the game");
//    $("#race-game-area").removeClass("game-area-hidden");
//    $("#race-game-area").addClass("race-game-area-revealed");
// }
// );

function hideLightbox () {
  $('#car1').fadeOut(300, function () {
    // After modal dissapears, remove click event on body
    $('body').unbind('click', hideLightbox);
  });
}

$('#racer-game').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log("we in the game");
       $("#race-game-area").removeClass("game-area-hidden");
       $("#race-game-area").addClass("race-game-area-revealed");

       // $( "#are-you-ready" ).removeClass( "are-you-ready-hidden" );
        // $( "#are-you-ready" ).addClass( "are-you-ready-revealed" );
      // function()
       // $( "#redCar" ).toggle( "drop" );

       // fade in the red car when start button is pressed
       $('#car1').css('display', 'flex').hide().fadeIn(300, function () {
         $('body').on('click', hideLightbox);
       });

       $('#racecar-mockup').css('display', 'none').hide().fadeOut(300, function (){
         console.log("we in the fadeout for the mockup function")
       });

    // $('#menu').toggleClass('open');

    $("#racer-game").one('click', function closeMenu (e){
        if(!$(e.target).is('#race-game-area')){
            $('#race-game-area').removeClass('race-game-area-revealed');
             $("#race-game-area").addClass("game-area-hidden");

        } else {
            $(document).one('click', closeMenu);
        }
    });
});


// when we click the car, the game starts
$( "#car1" ).click(function() {
  console.log("we in the toggle class");

  $("#red-car").removeClass("redCar");
  $("#red-car").addClass("car-ready-position");
  // $("#car1"  ).toggle( "bounce", { times: 3 }, "slow" );
});


 $('#switch-button').on('click', function (){
   console.log("we in the switch car button");
});

// VANILLA
  var car1 = {
    name : "RED CHALLE",
    div : document.getElementById('car1'),
    position: 0

  }

  var car2 = {
    name : "BLUE CHALLE",
    div : document.getElementById('car2'),
    position: 0

  }
//
  //set the left to 0 first
  car1.div.style.left = 0 + "px";
  car2.div.style.left = 0 + "px";
// ;
//
function move (car)
{
  if(car.position > 700)
  {
    alert(`${car.name} WON`);
    return;

  }

  else{
    var currentRedCarPosition = parseInt(car.div.style.left, 10);
    console.log(currentRedCarPosition);
    var newRedCarPosition = currentRedCarPosition + 40;
     car.div.style.left = newRedCarPosition + "px";
     car.position = newRedCarPosition;


  }


}


document.body.addEventListener('keyup',function(event){

  if(event.key === 'ArrowRight'){
    console.log('CAR1');
    move(car1);
  } else if(event.key === "ArrowLeft"){
    console.log('CAR2');
    move(car2);
  }
});


// document.getElementById("car1").onclick = function()
// {
//
//
//   var currentRedCarPosition = parseInt(document.getElementById("car1").style.left, 10);
//   console.log(currentRedCarPosition);
//   var newRedCarPosition = currentRedCarPosition + 200;
//
//
//
//    document.getElementById("car1").style.left = newRedCarPosition + "px";
// }


var car1;

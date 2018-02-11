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

$('#racer-game').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log("we in the game");
       $("#race-game-area").removeClass("game-area-hidden");
       $("#race-game-area").addClass("race-game-area-revealed");


    // $('#menu').toggleClass('open');

    $(document).one('click', function closeMenu (e){
        if(!$(e.target).is('#race-game-area')){
            $('#race-game-area').removeClass('race-game-area-revealed');
             $("#race-game-area").addClass("game-area-hidden");

        } else {
            $(document).one('click', closeMenu);
        }
    });
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





document.getElementById("car1").onclick = function()
{
  var currentRedCarPosition = parseInt(document.getElementById("car1").style.left, 10);
  console.log(currentRedCarPosition);
  var newRedCarPosition = currentRedCarPosition + 200;
   document.getElementById("car1").style.left = newRedCarPosition + "px";
}


var car1;

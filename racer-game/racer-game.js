

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
  if(car.position > 360)
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



$( document ).ready(function() {
  console.log(car1)

  var $rcar1 = $("#car1");
  var $rcar2 = $("#car2");
  console.log( "document loaded" );

});

var $rcar1 = $("#car1");
var $rcar2 = $("#car2");


// JQUERYY


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


  // fade in the red car when start button is pressed

  $displayCar($rcar1);
  $("#refresh-button").css('display', 'flex');
  // $('#car1').css('display', 'flex').hide().fadeIn(300, function () {
  //   $('body').on('click', hideLightbox);
  // });



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


var $displayCar = function (car){
  // $car.find('car1')
  console.log(car);

  $(car).css('display', 'flex').hide().fadeIn(300, function () {
    $('body').on('click', hideLightbox);
  });



}

var $startGame = function(mycar){
  console.log("bro i klled it");

  if($rcar1.attr("id") == mycar )
  {
    // console.log("bro i klled it x2");
    $("#pick-car").empty();
    //print instructions
    $("#directions").append(`<h2> Please use left arrow for <span style = "color: blue"> blue </span> car and right arrow for <span style = "color: red">red </span>car</h2>`)
    // put car1 in ready position
    $("#red-car").removeClass("redCar");
    $("#red-car").addClass("car-ready-position");

    // // put car2 in ready position
    $("#blue-car").removeClass("blueCar");
    $("#car2").removeClass("car-hidden");
    $("#car2").css('display', 'flex');
    $("#blue-car").addClass("car-ready-position2");

    //display the refresh button
    $("#switch-button").css('display', 'none');

    //add event listeners to left and right arrow to move cars
    document.body.addEventListener('keyup',function(event){

      if(event.key === 'ArrowRight'){
        console.log('CAR1');
        move(car1);
      } else if(event.key === "ArrowLeft"){
        console.log('CAR2');
        move(car2);
      }
    });




  }



};
// refresh page button
$('#refresh-button').on('click', function (e) {
  window.location.href ='index.html';

});

// when we click the car, the game starts
$( "#car1" ).click(function() {
  console.log("we in the toggle class");

  $startGame($( "#car1" ).attr( "id" ));


  // $("#car1"  ).toggle( "bounce", { times: 3 }, "slow" );
});

var chooseYourCharacter;

// how to switch from red to blue challe
$('#switch-button').on('click', function (){
  console.log("we in the switch car button");

  $("#pick-car").empty();

  $("#pick-car").append(`<h2> Please click on <span style = "color: red">red </span>car to begin </h2>`)


  if( $("#car2").css('display') ==  "none")
  {

    // chooseYourCharacter = setInterval(function(){
    // console.log("we in the if");


    $("#car2").css('display', 'flex').hide().fadeIn(300, function () {
      $('body').on('click', hideLightbox);
    });

    $('#car1').css('display', 'none').hide().fadeOut(600, function (){
      console.log("we in the fadeout for the mockup function")
    });
  }



  else {

    $("#car1").css('display', 'flex').hide().fadeIn(300, function () {
      $('body').on('click', hideLightbox);
    });

    $('#car2').css('display', 'none').hide().fadeOut(600, function (){
      console.log("we in the fadeout for the mockup function")
    });

  }




});

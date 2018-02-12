// --------------------------
// Carousel -----------------
// --------------------------

var currentSlideIndex = 0;

// Find out how many images are in the carousel wrapper
var numberImages = $('.carousel img').length;

// Set the width of the image wrapper and each image accordingly (responsive, baby!)
$('.image-wrapper').css('width', numberImages * 100 + '%');
$('.image-wrapper img').css('width', 100 / numberImages + '%');

// Set up a timer for the carousel
var carouselTimer = setInterval(timerTransition, 4000);

function timerTransition () {

  if (currentSlideIndex ===  numberImages - 1) {
    // If we are on the last slide, we want to go back to the first
    currentSlideIndex = 0;
  } else {
    // Otherwise advance to the next slide.
    currentSlideIndex += 1;
  }

  // Transition that baby!!
  transitionSlides();
}

$('.carousel-indicators').on('click', 'li', function () {
  // Clear Timer for Carousel
  clearInterval(carouselTimer);
  // Restart Timer for Carousel
  carouselTimer = setInterval(timerTransition, 3000);

  // Find out which slide the user wants to go to
  currentSlideIndex = $(this).data('slide-number');

  // Transition that baby!!
  transitionSlides();

});


function transitionSlides () {
  // Find out what percentage the slide wrapper should be transitioned
  var amountToTranslate = -((100 / numberImages) * currentSlideIndex);

  // Slide the carousel wrapper
  $('.image-wrapper').css('transform', 'translateX(' + amountToTranslate + '%)');

  // Update the indicators so the user knows which slide is currently showing
  $('.carousel-indicators li').removeClass('active');
  $('.carousel-indicators li[data-slide-number="' + currentSlideIndex + '"]').addClass('active');
}


// --------------------------
// Lightbox -----------------
// --------------------------
$('.masonry').on('click', 'img', function () {
  // Clear Timer for Carousel so that it stops switching slides
  // clearInterval(carouselTimer);

  // Find out which image the user wants to view in the lightbox
  var imageSrc = $(this).attr('src');
  console.log(imageSrc);

  $('.lightbox img').attr('src', imageSrc);

  // Fade in lightbox (as a flex container)
  $('.lightbox').css('display', 'flex').hide().fadeIn(300, function () {
    $('body').on('click', hideLightbox);
  });

});

function hideLightbox () {
  $('.lightbox').fadeOut(300, function () {
    // After modal dissapears, remove click event on body
    $('body').unbind('click', hideLightbox);
  });
}


// --------------------------
// SKILLS ANIMATION ----------
// --------------------------
var quoteCounter = 0;
var quoteLength = $('blockquote').length;

setInterval(function () {
  $('blockquote').eq(quoteCounter).fadeOut(800, function () {
    if (quoteCounter === quoteLength - 1) {
      quoteCounter = 0;
    } else {
      quoteCounter += 1;
    }
    $('blockquote').eq(quoteCounter).fadeIn();
  });
}, 1600);

// call a function scrollsspy everytime we scroll
$('body').scrollspy({ target: '#nav-scroll' })

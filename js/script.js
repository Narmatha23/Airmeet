var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}
function hideWord($word) {
  var nextWord = takeNext($word);
  switchWord($word, nextWord);
  setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}




const myFunction = () => {
  document.getElementById("first").style.display ='block';
   document.getElementById("second").style.display ='none'
   document.getElementById("third").style.display ='none'
   document.getElementById("four").style.display ='none'
}

const myFunction1= () => {
  document.getElementById("second").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("four").style.display ='none'
}

const myFunction2 = () => {
  document.getElementById("third").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("four").style.display ='none'
}
const myFunction3 = () => {
  document.getElementById("four").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
}

// toggle-btn
$('div').on('click',function(e) {
  if ($(this).hasClass('my-1')) {
      $('#tab-2').removeClass('active-btn');
      $('#tab-3').removeClass('active-btn');
      $('#tab-4').removeClass('active-btn');
      $('#tab-1').addClass('active-btn');
  }
});
$('div').on('click',function(e) {
  if ($(this).hasClass('my-2')) {
      $('#tab-2').addClass('active-btn');
      $('#tab-3').removeClass('active-btn');
      $('#tab-4').removeClass('active-btn');
      $('#tab-1').removeClass('active-btn');
  }
});
$('div').on('click',function(e) {
  if ($(this).hasClass('my-3')) {
      $('#tab-2').removeClass('active-btn');
      $('#tab-3').addClass('active-btn');
      $('#tab-4').removeClass('active-btn');
      $('#tab-1').removeClass('active-btn');
  }
});
$('div').on('click',function(e) {
  if ($(this).hasClass('my-4')) {
      $('#tab-2').removeClass('active-btn');
      $('#tab-3').removeClass('active-btn');
      $('#tab-4').addClass('active-btn');
      $('#tab-1').removeClass('active-btn');
  }
});



       
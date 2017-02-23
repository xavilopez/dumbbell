$(function() {
  var counter;
  var counterMs;
  var topCount = 30;
  var count = topCount;
  $('#timerFito').text(count);
  var topCountMs = 100;
  var countMs = topCountMs;
  $('.timerseg').text(countMs);
  var isPaused = true;

$('#chronobtn').on('click',()=>{
  if ($('#chronobtn').hasClass('glyphicon-repeat')) {
    count = topCount;
    $('#timerFito').text(count);
    $('#chronobtn').removeClass('glyphicon-repeat');
    $('#chronobtn').addClass('glyphicon-play');

  }else if ($('#chronobtn').hasClass('glyphicon-pause')){
      $('#chronobtn').removeClass('glyphicon-pause');
      $('#chronobtn').addClass('glyphicon-play');
      clearInterval(counter);
      clearInterval(counterMs);

  }else if ($('#chronobtn').hasClass('glyphicon-play')){
      $('#chronobtn').removeClass('glyphicon-play');
      $('#chronobtn').addClass('glyphicon-pause');
      counter = setInterval(timerFito, 1000);
      counterMs = setInterval(timerMS, 10); //10 will  run it every 100th of a second
  }
})

function timerFito(){
    if (count <= 0)
    {
        $('#chronobtn').removeClass('glyphicon-pause');
        $('#chronobtn').addClass('glyphicon-repeat');
        clearInterval(counter);

        return;
     }
     count--;
    $("#timerFito").text(count);
}

function timerMS(){
  console.log("asd");
}



})

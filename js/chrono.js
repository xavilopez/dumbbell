$(function() {
  var counter;
  var topCount = 30;
  var count = topCount;
  $('#timerFito').text(count);
  var isPaused = true;

$('#chronobtn').on('click',()=>{
  console.log($('#chronobtn').hasClass('glyphicon-repeat'));
  if ($('#chronobtn').hasClass('glyphicon-repeat')) {
    count = topCount;
    $('#timerFito').text(count);
    $('#chronobtn').removeClass('glyphicon-repeat');
    $('#chronobtn').addClass('glyphicon-play');
  }else if ($('#chronobtn').hasClass('glyphicon-pause')){
      $('#chronobtn').removeClass('glyphicon-pause');
      $('#chronobtn').addClass('glyphicon-play');
      clearInterval(counter);

  }else if ($('#chronobtn').hasClass('glyphicon-play')){
      $('#chronobtn').removeClass('glyphicon-play');
      $('#chronobtn').addClass('glyphicon-pause');
      counter = setInterval(timerFito, 1000); //10 will  run it every 100th of a second
  }
})

function timerFito()
{
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



})

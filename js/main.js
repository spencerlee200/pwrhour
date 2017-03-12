let m = 60;
let s = 60;
let b = 420;
var end;

$('#active button').on('click', function(){
  location.reload();
});

$('#intro button').on('click', function(){
  //Setting Initial States
  var end = false;
  $("#intro").toggle( "drop" );
  $("#active").toggle( "drop" );
  $('#beer').css('height', b+'px');
  setInterval(second, 1000);
  minute();
});

function minute() {
  $("#active span").text(m + " more drinks");
  if(m == 1) {
    $("#active span").text(m + " more drink")
  }
  if(m > 0) {
    m--;
    var snd = new Audio("js/drink.mp3");
    snd.play();
  }
  else {
    var snd = new Audio("js/victory.mp3");
    snd.play();
    $('#active').toggle("drop");
    $('#complete').toggle();
    end= true;
  }
}

function second() {
  if (s > 0) {
    s--;
    b=b - 7;
    if (s < 10) {
      $('#seconds').text('0' + s);
    }
    else {
      $('#seconds').text(s);
    }
    $("#beer").animate({height: b+"px"},300);
  }
  else {
    if(end) {
      s=0;
      return;
    }
    else {
      s= 60;
      b= 420;
      $('#seconds').text(s);
      $("#beer").animate({height: b+"px"},300);
      minute();
    }
  }
}

bankroll = 100;
restart_btn = '<button id="restart">RESTART</button>'

function result(user_n, rand_n, bet){
  if(user_n == rand_n){
    bankroll += parseInt(bet);
    return "correct!";
  } else if (user_n == rand_n + 1 || user_n == rand_n - 1)
    return "almost!";
  else {
    bankroll -= bet;
    return "wrong!";
  }
}

function showResult(){
  var bet = $("#bet").val();
  var guess = $("#guess").val();
  //alert(bet + guess);

  var rand_n = Math.floor(Math.random() * 10) + 1;
  $("ol").append('<li> You bet ' + bet + 
    '<br>you guess number ' + guess + ' the right number is ' + rand_n +
    '<br><h3>' + result(guess, rand_n, bet) + '</h3>' + 
    '<br> your total bankroll is ' + bankroll + '</li>');

  $("#bankroll").text(bankroll);

  if(bankroll <= 0){
    $('#regame').html(restart_btn);
    $('#game').fadeOut();
  }
}

$(document).ready(function(){
  $("#bankroll").text(bankroll);

  $("#submit").click(showResult);

  $('#regame').click('button', function(){
    location.reload();
  });

});
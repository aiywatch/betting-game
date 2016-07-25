bankroll = 100;

function result(user_n, rand_n, bet){
  if(user_n == rand_n){
    bankroll += bet;
    return "correct!";
  } else if (user_n == rand_n + 1 || user_n == rand_n - 1)
    return "almost!";
  else {
    bankroll -= bet;
    return "wrong!";
  }
}

$(document).ready(function(){
  $("#bankroll").text(bankroll);

  $("#submit").click(function(){
    var bet = $("#bet").val();
    var guess = $("#guess").val();
    //alert(bet + guess);

    var rand_n = Math.floor(Math.random() * 10) + 1;
    $("ol").append('<li> You bet ' + bet + 
      '<br>you guess number ' + guess + ' the right number is ' + rand_n +
      '<br><h3>' + result(guess, rand_n, bet) + '</h3>' + 
      '<br> your total bankroll is ' + bankroll + '</li>');

    $("#bankroll").text(bankroll);

  });

});
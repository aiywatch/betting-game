var bankroll = 100;

while (bankroll > 0){
  var money = prompt("Your bankroll " + bankroll + " Bet money : ");
  var guess = prompt("1-10 - guess?");
  var rand_n = Math.floor(Math.random() * 10) + 1;
  alert(rand_n);

  if(guess == rand_n){
    bankroll += money;
    alert("correct!");
  } else if (guess == rand_n + 1 || guess == rand_n - 1)
    alert("almost!")
  else {
    bankroll -= money;
    alert("wrong!");
  }
}
  
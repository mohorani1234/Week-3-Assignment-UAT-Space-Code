function countdownTimerV1() {
    console.log("countdownTimerV1() begin");
    var counter = 50;
    document.getElementById("countdownDisplay").innerHTML = counter;
    console.log(counter);
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 5000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 10000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 15000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 20000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 25000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 30000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 35000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 40000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 45000)
    setTimeout(function () {
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log(counter);
    }, 50000) 
}

function playCraps(){
    //debugging setup for function start
    console.log("playCraps() started");
    //created die1 variable
    var die1;
    //created die2 variable
    var die2;
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var sum = die1 + die2;
    if (sum == 7 || sum == 11){
        document.getElementById("gameRes").innerHTML = "Craps! You lose!!!";
    } else if(die1 == die2 && die1%2 == 0){
        //for the win
        document.getElementById("gameRes").innerHTML = "Huzzah! You win!!!";
    }else{
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please Try again.";
}

}
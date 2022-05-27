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
//a function which is titled "playCraps" which will display the code which is shown below
function playCraps(){
    //debugging setup for function start
    console.log("playCraps() started");
    //created die1 variable
    var die1;
    //created die2 variable
    var die2;
    //Returns a certain value for die1 which is multiplied by six and then one is added to the same value
    die1 = Math.floor(Math.random() * 6) + 1;
    //prints the value for die1 from the previous line of code.
    console.log(die1);
    //Returns a certain value for die2 which is multiplied by six and then one added to the same value
    die2 = Math.floor(Math.random() * 6) + 1;
    //prints the value for die 2 from the line of code above it.
    console.log(die2);
    //sets the results of die1 equal to die1
    document.getElementById("die1Res").innerHTML = die1;
    //sets the results of die2 requal to die2
    document.getElementById("die2Res").innerHTML = die2;
    //declares a new variable which is the sum of die1 and die2 combined and displays the total sum as well of both die1 and die2.
    var sum = die1 + die2;
    //an if statement stating that if the sum of both die1 and die2 are equal to either 7 or 11, then the following will happen in terms of the code below.
    if (sum == 7 || sum == 11){
        //Displays text stating that the user lost
        document.getElementById("gameRes").innerHTML = "Craps! You lose!!!";
        //an else if statement stating that otherwise if the value of die1 is equal to die 2 and the value of die2 divided by die1 is zero, then the following code will be displayed.
    } else if(die1 == die2 && die1%2 == 0){
        //Returns text stating that the user won
        document.getElementById("gameRes").innerHTML = "Huzzah! You win!!!";
        //an else staement which states otherwise the following will happen in terms of what the code will do.
    }else{
        //Returns text stating how the player should try again since the player did not win or lose.
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please Try again.";
}

}

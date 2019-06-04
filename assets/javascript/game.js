//Assign global variables
var wins = 0;
var losses = 0;
var assign = []
var totalScore = 0;

//Generate random number
var randomNumber = (Math.floor(Math.random() * 101)+ 19)

//Display in HTML
$("#random-number").text(randomNumber)
$("#wins").html(wins)
$("#losses").html(losses)
$('#total-score').html(totalScore)

//Generate unique random gem values
function randomGem () {
    while (assign.length < 4) {
        var rand = (Math.floor(Math.random() * 12) + 1)
        if(assign.indexOf(rand) < 0) {
            assign.push(rand)
        }
    }
}

//call randomGem function
randomGem()

//Reset
function reset() {
    totalScore = 0
    $('#total-score').html(totalScore)
    randomNumber = (Math.floor(Math.random() * 101)+ 19)
    $("#random-number").text(randomNumber)
    assign = []
    randomGem()
}

//Win-Loss conditions
function gameOver () {
    if (totalScore === randomNumber) {
        wins++;
        $('#win-loss-alert').text("YOU WON!!!")
        $("#wins").html(wins);
        reset()
    } else if (totalScore > randomNumber) {
        losses++;
        $('#win-loss-alert').text("you lost...")
        $("#losses").html(losses)
        reset()
    }
}

// click events
$('#gem-1').on("click", function () {
    totalScore += (assign[0]);
    $('#total-score').html(totalScore);
    gameOver()   
}); 
$('#gem-2').on("click", function() {
    totalScore += (assign[1]);
    $('#total-score').html(totalScore);
    gameOver()
}); 
$('#gem-3').on("click", function() {
    totalScore += (assign[2]);
    $('#total-score').html(totalScore);
    gameOver()
}); 
$('#gem-4').on("click", function() {
    totalScore += (assign[3]);   
    $('#total-score').html(totalScore);
    gameOver()
});
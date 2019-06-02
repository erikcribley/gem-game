//Assign global variables
var wins = 0;
var losses = 0;
var assign = []
var totalScore = 0;

//Generate random number
var randomNumber = (Math.floor(Math.random() * 101)+ 19)

//Display dynamic values
$("#random-number").text(randomNumber)
$("#wins").html(wins)
$("#losses").html(losses)
$('#total-score').html(totalScore)

//Generate random gem values
function randomGem () {
    for(i = 0; i < 4; i++) {
        assign.push(Math.floor(Math.random() * 12) + 1)
    }
}

//check if array contains at least one odd number
// function odd () {
//     if (assign.includes(1,3,5,7,9,11)) {
//         var gem1 = assign[0]  
//         var gem2 = assign[1]  
//         var gem3 = assign[2]  
//         var gem4 = assign[3] 
//     } else {
//         assign = []
//         for(i = 0; i < 4; i++) {
//             assign.push(Math.floor(Math.random() * 12) + 1)
//         }
//     }
// } 

randomGem()

//Reset function
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
        $("#wins").html(wins);
        reset()
    } else if (totalScore > randomNumber) {
        losses++;
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
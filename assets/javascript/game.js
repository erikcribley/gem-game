//Assign global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var assign = []

//Generate random number
var randomNumber = (Math.floor(Math.random() * 101)+ 19)

//Display in random-number div
var displayRandom = $("#random-number").text(randomNumber)

//Display total score in total-score div
var displayScore = $('#total-score').html(totalScore)

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

//Reset function
function reset() {
    randomNumber
    game()
    totalScore = 0;
}


randomGem()

// click events
$('#gem-1').on("click", function() {totalScore += assign[0]; $('#total-score').html(totalScore)}); 
$('#gem-2').on("click", function() {totalScore += assign[1]; $('#total-score').html(totalScore)}); 
$('#gem-3').on("click", function() {totalScore += assign[2]; $('#total-score').html(totalScore)}); 
$('#gem-4').on("click", function() {totalScore += assign[3]; $('#total-score').html(totalScore)}); 

    
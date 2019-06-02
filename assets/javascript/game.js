//Assign global variables
var wins = 0;
var losses = 0;
var totalScore = 0;

//Generate random number
var randomNumber = (Math.floor(Math.random() * 101)+ 19)
//Display in random-number div
$("#random-number").html(randomNumber)

//Generate random gem values
function randomGem () {
    var assign = []
    for(i = 0; i < 4; i++) {
        assign.push(Math.floor(Math.random() * 12) + 1)
    }
    //check if array contains at least one odd number
    if (assign.includes(1,3,5,7,9,11)) {
    var gem1 = assign[0]  
    var gem2 = assign[1]  
    var gem3 = assign[2]  
    var gem4 = assign[3] 
    } else {
        assign = []
        for(i = 0; i < 4; i++) {
            assign.push(Math.floor(Math.random() * 12) + 1)
        }
    }
    console.log(assign)
} 

console.log(randomGem())

//Reset function
function reset() {
    randomNumber
    randomGem
    totalScore = 0;
}

//Game function

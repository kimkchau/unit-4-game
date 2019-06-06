// jQuery Ready Function waits for the document to complete loading before initiating JavaScript


// TODO: randomNum number variable (19-120)

// TODO: wins variable
// TODO: losses variable

// TODO: ranOne random number variable (1-12) 
// TODO: ranTwo random number variable (1-12)
// TODO: ranThree random number variable (1-12)
// TODO: ranFour random number variable (1-12)

// TODO: ranOne button; add associated random number value from above
// TODO: ranTwo button; add associated random number value from above 
// TODO: ranThree button; add associated random number value from above 
// TODO: ranFour button; add associated random number value from above

// TODO: for loop to sum crystal value
// TODO: compare sum of farm animal value to random number target 
// TODO: update wins/losses, clear random values, and generate new random values



//TODO: random number generator

$(document).ready(function () {

    //Global Variables
    var randomNum;
    var ranOne;
    var ranTwo;
    var ranThree;
    var ranFour;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    resetNumbers();

    // Generate a random number between 19-120
    // Generate a random number (ranOne, ranTwo, ranThree, ranFour) between 1-12
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    // Reset function
    function resetNumbers() {
        randomNum = randomIntFromInterval(19, 120);
        ranOne = randomIntFromInterval(1, 12);
        ranTwo = randomIntFromInterval(1, 12);
        ranThree = randomIntFromInterval(1, 12);
        ranFour = randomIntFromInterval(1, 12);
    };

    console.log(randomNum);
    console.log(ranOne);
    console.log(ranTwo);
    console.log(ranThree);
    console.log(ranFour);
    
    $('#randomNum').text(randomNum);

    $("#buttonOne").on("click", function() {
        totalScore = ranOne;
        $('#totalScore').text(totalScore);
    });

    

        


    

});
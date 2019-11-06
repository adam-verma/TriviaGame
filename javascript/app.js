questionPool = [
{
    question: "Which nut is used to make dynamite?",
    answer: "0",
    choices: ["Peanut", " Walnut", "Hazelnut", "Pecan"], 
},
{
    question: "When born, what color is a Dalmation puppy?",
    answer: "2",
    choices: ["Black", "Black with White Spots", "White", "White with Black Spots"], 
},
{
    question: "",
    answer: "",
    choices: [" ", " ", " ", " "], 
},
{
    question: "",
    answer: "",
    choices: [" ", " ", " ", " "], 
},
{
    question: "",
    answer: "",
    choices: [" ", " ", " ", " "], 
}]

// Let global letiables

let questionCounter = 0;
// Counts up the correct answers
let rightAnswer = 0;
// Counts up the wrong answers
let wrongAnswer = 0;
// Initial time set for seconds  
let time = 20; 
// 
let intervalID;
// Stops timer from running randomly
let timerGo = false;
// Refers to location of question 


// Ready function 
$(document).ready(function() {
    // Start function when player clicks 'Begin'

    $("#start-button").on("click", gameTimer.start);
    $(".choice").on("click", gameTimer.findAnswer);
    $("#submit-button").on("click", gameTimer.stop);
    $("#reset").on("click", gameTimer.reset);

//showing global variables
let intervalId;
let clockRunning = false;
let correctAnswers = 0;
let incorrectAnswers = 0;
let time = 40;

// timer that contains letiables in the object
let gameTimer = {

    // function that compares choice to 'true' answer and changes scoreboard
    findAnswer: function() {
        
        //determines if 
        if (clockRunning) {
            let userChoice = $(this).val().trim();
            // console.log(this);
            if (userChoice === "true" + correctAnswers < 11) {
                correctAnswers++
            }

            //if player gets all 7 questions correct, the game ends
            else if (userChoice === "false" + correctAnswers > 10) {
                gameTimer.stop();
                incorrectAnswers++;
            }
        }

        //prevent a userChoice from being made if the game hasn't started
        else if (!clockRunning) {
            event.preventDefault();
        }
    },
   
    //function that starts the countdown clock
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(gameTimer.count, 1000);
            clockRunning = true;
        }
    },

    //function that stops the countdown clock and ends the game
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;

        //instead ofgameTimer time, the score is displayed in the header
        $("#gameTimer").text("Out of 10 questions you got" + correctAnswers + "right");
        $("#gameTimer").text("Out of 10 questions you got" + incorrectAnswers + "wrong");
    },

    //function initialized in the start function, counts down in intervals of 1000 ms
    count: function() {

        //as long as there is still time left on the clock, keep counting down
        if (gameTimer.time > 0) {
            gameTimer.time--;
            let converted = gameTimer.timeConverter(gameTimer.time);
            $("#gameTimer").text(converted);
        }

        //when the clock reaches 0, stop counting down
        else {
            gameTimer.stop();
        }
    },

     reset: function() {

        gameTimer.stop();
        correctAnswers = 0;
        incorrectAnswers = 0;
        gameTimer.time = 40;
        $("#gameTimer").text("1:00");
    },

    //time function that converts second into minutes, seconds
    timeConverter: function(t) {
        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);


        if (seconds < 10) {
            seconds = "0" + seconds;
          }
        
          if (minutes === 0) {
            minutes = "00";
          }
        
          else if (minutes < 10) {
            minutes = "0" + minutes;
          }

          return minutes + ":" + seconds;
        }
    }
});




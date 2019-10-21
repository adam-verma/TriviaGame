questionPool = [
{
    question: "",
    answer: [
        { choice: " ", value:false }, 
        { choice: " ", value:false },
        { choice: " ", value:false }, 
        { choice: " ", value:true }, 
    ]
},
{
    question: "",
    answer: [
        { choice: " ", value:false }, 
        { choice: " ", value:false },
        { choice: " ", value:false }, 
        { choice: " ", value:true }, 
    ]
},
{
    question: "",
    answer: [
        { choice: " ", value:false }, 
        { choice: " ", value:false },
        { choice: " ", value:false }, 
        { choice: " ", value:true }, 
    ]
},
{
    question: "",
    answer: [
        { choice: " ", value:false }, 
        { choice: " ", value:false },
        { choice: " ", value:false }, 
        { choice: " ", value:true }, 
    ]
},
{
    question: "",
    answer: [
        { choice: " ", value:false }, 
        { choice: " ", value:false },
        { choice: " ", value:false }, 
        { choice: " ", value:true }, 
    ]
}
]

// Let global variables

let questionCounter = 0;
// Counts up the correct answers
let rightAnswer;
// Counts up the wrong answers
let wrongAnswer;
// Initial time set for seconds  
let time = 20; 
// 
let intervalID;
// Stops timer from running randomly
let timerRunning = false;
// Refers to location of question 


// Ready function 
$(document).ready(function() {
    // Start function when player clicks 'Begin'
    $('body').on('click','#button',function(event) {
        // Display text on DOM
        userInput = $(this).text();
        console.log(userInput);
        // Define variable to call each 'answer' attribute 
        let 

    });

    function checkCorrect() {

    }

    function checkIncorrect() {

    }

    function resetQuestions() {

    }

    function timeoutQuestion() {
        intervalID = setInterval(count,1000)
    }

    function showResults() {

    }





});




/*
    This is a IIFE - Immediatly Invoked Function Expression.
    IIFEs run as soon as they are defined. IFFEs are commonly used to keep variables/functions outside of the gloobal scope and they tend to work better if you're running multiple scripts.
*/

//This variable exist in teh global scope, which means it's less secure and can be accessed by anything 
var global;

(function() {
    //Because thus variable is inside of an IIFE, it is not in the global scope
    var variable = 10;

    //Make references to our elements that we're going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

    var myQuestion = [];

    //What does a quiz question consist of?
    //Question Text, Answer Choices, Correct Answer

    var question1 = {
        question: "what color is the sky?",
        answer: {
            a: "Blue",
            b: "Green",
            c: "Red"
        },
        correctAnswer: "a"
    }

    console.log(question1.question); //Get the question text
    console.log(question1.answer.b); //Get answer b

    var question2 = {
        question: "What Pokemon is from Generation 3?",
        answer: {
            a: "Pikachu",
            b: "Froakie",
            c: "Mudkip"
        },
        correctAnswer: "c"
    }
    
    var question3 = {
        question: "What anime is a shonen Jump genre?",
        question: {
            a: "My Hero Academia",
            b: "Newgame!",
            c: "Ace of Diamond"
        },
        correctAnswer: "a"
    }

    //Add the question objects to our array of questions
    myQuestion.push(question1, question2, question3);
    
    //Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {

    }

    //Function to show the results of the quiz
    function showResults() {

    }

    //Function to reset the quiz
    function resetQuiz() {
        
    }

})();
    
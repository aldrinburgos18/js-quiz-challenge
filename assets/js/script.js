const questions = [
    {
       q: "When was Taylor Swift born?",
       a: [
            {option: "December 13, 1989", correct: true},
            {option: "December 8, 1989", correct: false},
            {option: "December 12, 1989", correct: false},
            {option: "December 18, 1990", correct: false},
       ],
    },
    {
        q: "What is Taylor Swift's middle name?",
        a: [
             {option: "Alison", correct: true},
             {option: "Jennifer", correct: false},
             {option: "Hayden", correct: false},
             {option: "Olivia", correct: false},
        ],
     },
     {
        q: "How tall is Taylor Swift?",
        a: [
             {option: "5'10\" (178cm)", correct: true},
             {option: "5'5\" (165cm)", correct: false},
             {option: "5'7\" (170cm)", correct: false},
             {option: "5'8\" (172cm)", correct: false},
        ],
     },
     {
        q: "What record company recorded Taylor Swift's first six albums?",
        a: [
             {option: "Big Machine Records", correct: true},
             {option: "Arista", correct: false},
             {option: "Columbia", correct: false},
             {option: "Fueled By Ramen", correct: false},
        ],
     },
    {
        q: "Which of Taylor Swift's songs do these lyrics come from '... but in a box beneath my bed is a letter you never read...",
        a:[
            {option: "Tim McGraw", correct: true},
            {option: "Our Song", correct: false},
            {option: "Forever and Always", correct: false},
            {option: "Picture to Burn", correct: false},
        ],
    },
    {
        q: "Taylor Swift's song 'Back to December' is about whom?",
        a: [
            {option: "Taylor Lautner", correct: true},
            {option: "John Mayer", correct: false},
            {option: "Harry Styles", correct: false},
            {option: "Joe Jonas", correct: false},
        ],
    }, 
    {
        q: "What was the first song that Taylor wrote?",
        a: [
            {option: "Lucky You", correct: true},
            {option: "Picture to Burn", correct: false},
            {option: "Tim McGraw", correct: false},
            {option: "Teardrops On My Guitar", correct: false},
        ],
    },
    {
        q: "What year did Taylor Swift win her first award?",
        a: [
            {option: "2007", correct: true},
            {option: "2009", correct: false},
            {option: "2008", correct: false},
            {option: "2006", correct: false},
        ],
    },
];

//shuffle questions
const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
//keeps track of which question we're currently at
var currentIndex = 0;

const startPageEl = document.querySelector('#start-container');
const startButtonEl = startPageEl.querySelector('#start-btn');
const quizContainerEl = document.querySelector('#quiz-container');
const questionContainerEl = document.querySelector('#question-container');

var startQuiz = function() {
    //hide welcome screen
    startPageEl.hidden = true;

    var questionContainer = displayQuestion();
    var optionsContainer = displayChoices();

    //append to page
    quizContainerEl.appendChild(questionContainer);
    quizContainerEl.appendChild(optionsContainer);
};

var displayQuestion = function() {
    if(currentIndex <= questions.length) {
        //create question element
        var questionH2 = document.createElement('h2');
        questionH2.setAttribute('id', 'question');
        questionH2.textContent = questions[currentIndex].q;

        return questionH2;
    };
};

var displayChoices = function() {
    //create randomized order of choices
    var randomizedChoices = questions[currentIndex].a.sort(() => 0.5 - Math.random());
    const choicesContainer = document.querySelector('#choices-container');
   
    //loop through and create buttons
   for(var i = 0; i < randomizedChoices.length; i++){
        //create choices element
        var buttonEl = document.createElement('button');
        buttonEl.classList.add('choice-btn');
        buttonEl.textContent = randomizedChoices[i].option;


        //display to page 
        choicesContainer.appendChild(buttonEl);
   };

   return choicesContainer;
};

startButtonEl.addEventListener('click', startQuiz);
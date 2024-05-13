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
questions.sort(() => 0.5 - Math.random());

//keeps track of which question we're currently at
var currentIndex = 0;

const startPageEl = document.querySelector('#start-container');
const startButtonEl = startPageEl.querySelector('#start-btn');
const quizContainerEl = document.querySelector('#quiz-container');

var startQuiz = function() {
    if(currentIndex <= questions.length){
        //hide welcome screen
        startPageEl.hidden = true;
    
        //create question container div
        var questionContainerEl = document.createElement('div');
        questionContainerEl.id = 'question-container';

        var questionContainer = displayQuestion();
        var choicesContainer = displayChoices();

        //append to page
        questionContainerEl.appendChild(questionContainer);
        quizContainerEl.appendChild(questionContainerEl);
        quizContainerEl.appendChild(choicesContainer);

        choicesContainer.addEventListener('click', checkAnswer);
    };
};

var displayQuestion = function() {
    //create question element
    var questionH2 = document.createElement('h2');
    questionH2.setAttribute('id', 'question');
    questionH2.textContent = questions[currentIndex].q;

    return questionH2;
};

var displayChoices = function() {
    //create randomized order of choices
    var randomizedChoices = questions[currentIndex].a.sort(() => 0.5 - Math.random());
    const choicesContainer = document.createElement('div');
    choicesContainer.id = 'choices-container';
   
    //loop through and create buttons
   for(var i = 0; i < randomizedChoices.length; i++){
        //create choices element
        var buttonEl = document.createElement('button');
        buttonEl.classList.add('choice-btn', 'neutral');
        buttonEl.textContent = randomizedChoices[i].option;

        //display to page 
        choicesContainer.appendChild(buttonEl);
   };
   return choicesContainer;
};

var checkAnswer = function(e) {
    var correctAnswer = questions[currentIndex].a.find((correctAnswer) => correctAnswer.correct);
    var selectedOption = e.target;
    var isButton = selectedOption.matches('button');
    
    if(isButton) {
        if(selectedOption.textContent === correctAnswer.option) {
            selectedOption.classList.remove('neutral');
            selectedOption.classList.add('correct');
            showStatIndicator(true);
        } else {
            selectedOption.classList.remove('neutral');
            selectedOption.classList.add('incorrect');
            showStatIndicator(false);
        };
        
    };
};

var showStatIndicator = function(isCorrect) {
    //disable all btn
    document.querySelectorAll('.choice-btn.neutral').forEach((btns) => {btns.classList.remove('neutral'); btns.disabled = true});

    //create elements
    var statContainerEl = document.createElement('div');
    statContainerEl.id = 'stat-container';
    var indicatorCont = document.createElement('div');
    var indicatorEl = document.createElement('h3');
    indicatorCont.id = 'correct-stat-container';
    indicatorEl.id = 'indicator';
    indicatorCont.appendChild(indicatorEl);
    var nextBtnCont = document.createElement('div');
    var nextButtonEl = document.createElement('button');
    nextBtnCont.id = 'next-btn-container';
    nextButtonEl.id = 'next-btn'
    nextButtonEl.textContent = 'Next';
    nextBtnCont.appendChild(nextButtonEl);
    if(isCorrect) {
        indicatorEl.textContent = 'Correct!' 
    } else {
        indicatorEl.textContent = 'Incorrect.'
    }
    statContainerEl.appendChild(indicatorCont);
    statContainerEl.appendChild(nextBtnCont);
    quizContainerEl.appendChild(statContainerEl);

    var nextButton = statContainerEl.querySelector('#next-btn');
    nextButton.addEventListener('click', nextQuestion);
};

var nextQuestion = function() {
    currentIndex++

    if(currentIndex <= questions.length) {
        
    }
}

startButtonEl.addEventListener('click', startQuiz);
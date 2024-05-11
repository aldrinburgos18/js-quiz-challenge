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
]

const startButton = document.querySelector('#start-btn');

var startQuiz = function() {
    alert('Quiz started.')
}

startButton.addEventListener('click', startQuiz);
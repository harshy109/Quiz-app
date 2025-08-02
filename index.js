const questions = [
    {
        question : "Which is largest animal in the world?",
        answers : [
            {text : "Giraffe", correct : false},
            {text : "Elephant", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Anaconda", correct : false},
        ]
    },
    {
        question : "Who is Prime Minister of India?",
        answers : [
            {text : "Manmohan Singh", correct : false},
            {text : "Narendra Modi", correct : true},
            {text : "Draupati Murmu", correct : false},
            {text : "Rajkovind Singh", correct : false},
        ]
    },
    {
        question : "What is National Bird of India?",
        answers : [
            {text : "Peacock", correct : true},
            {text : "Parrot", correct : false},
            {text : "Sparrow", correct : false},
            {text : "Gold Finch", correct : false},
        ]
    }
]

const questionElement = document.getElementById('question-element');
const answerDiv = document.getElementById('answers');
const nextButton = document.getElementById('nxt-btn');

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerDiv.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
}

function resetState(){
    nextButton.style.display = "None";
    while(answerDiv.firstChild){
        answerDiv.removeChild(answerDiv.firstChild);
    }
}
startQuiz();














// function checkAnswer(e){
//     //if else conditon
//     //if option matches answer -> chnage color of tab to green
//     //else change wrong option to red and correct to green
//     //add number of correct answers
//     //to display result at the end of quiz
//     if(e.target.innerHTML == "Blue Whale"){
//         e.target.style.backgroundColor = "green"
//     }
// }

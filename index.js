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
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false }
        ]
    },
     {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Osmium", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Oganesson", correct: false },
            { text: "Oxide", correct: false }
        ]
    },
    {
    question: "In which year did India gain independence from Britain?",
        answers: [
            { text: "1942", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1930", correct: false }
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
const questionDiv = document.getElementById('question');


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
        // if(answer.correct){
            button.dataset.correct = answer.correct;
        // }
        button.addEventListener('click', selectAnswer);
    });

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    //mark incorrect and correct
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score = score + 1;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //mark correct
    const buttons = answerDiv.querySelectorAll('button');
    buttons.forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function handleQuestions(){
    questionIndex = questionIndex + 1;
    if(questionIndex < questions.length){
        showQuestion();
    }
    else{
        displayScore();
    }
}

nextButton.addEventListener("click", function(){
    
    if(questionIndex < questions.length){
        handleQuestions();
    }
    else{
        questionDiv.style.textAlign = "left";
        questionDiv.style.paddingLeft = "50px";
        startQuiz();
    }
})

function displayScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    
    questionDiv.style.textAlign = "center";
    questionDiv.style.paddingLeft = "0px";
    if(score == questions.length){
        answerDiv.innerHTML = '🎉';
        answerDiv.style.fontSize = "50px";
        answerDiv.style.textAlign = "center";
    }

    nextButton.innerHTML = "Play again";
    
    nextButton.style.display='block';
}

function resetState(){
    nextButton.style.display = "none";
    while(answerDiv.firstChild){
        answerDiv.removeChild(answerDiv.firstChild);
    }
}
startQuiz();


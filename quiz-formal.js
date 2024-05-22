const questions = [
    {
        question: "Co oznacza skrót HTML",
        answers: [
            { text: "HyperText Markup Language", correct: true},
            { text: "Hyperlinks and Text Markup Language", correct: false},
            { text: "Home Tool Markup Language", correct: false},
            {text:  "Hyper Tool Markup Language", correct: false}
        ]
    },
    {
        question: "Który znacznik HTML jest używany do dodawania obrazów?",
        answers: [
            { text: "src", correct: false},
            { text: "image", correct: false},
            { text: "picture", correct: false},
            { text:  "img", correct: true}
        ]
    },
    {
        question: "Który znacznik HTML jest używany do tworzenia tabel?",
        answers: [
            { text: "tab", correct: false},
            { text: "td", correct: false},
            { text: "table", correct: true},
            { text: "tr", correct: false}
        ]
    },
    {
        question: "Co oznacza skrót CSS?",
        answers: [
            { text: "Colorful Style Sheets", correct: false},
            { text: "Cascading Style Sheets", correct: true},
            { text: "Computer Style Sheets", correct: false},
            { text: "Creative Style Sheets", correct: false}
        ]
    },
    {
        question: "Jak ustawić tło strony na niebieskie w CSS?",
        answers: [
            { text: "color: blue;", correct: false},
            { text: "background: blue;", correct: false},
            { text: "bgcolor: blue;", correct: false},
            { text: "background-color: blue;", correct: true}
        ]
    },
    {
        question: "Który atrybut CSS jest używany do zmiany koloru tekstu?",
        answers: [
            { text: "color", correct: true},
            { text: "font-color", correct: false},
            { text: "text-color", correct: false},
            { text: "text-style", correct: false}
        ]
    },
    {
        question: "Co oznacza skrót JS?",
        answers: [
            { text: "JavaScript", correct: true},
            { text: "JavaSystem", correct: false},
            { text: "JustScript", correct: false},
            { text: "JScript", correct: false}
        ]
    },
    {
        question: "Które z poniższych jest prawidłowym sposobem na wyświetlenie alertu w JavaScript?",
        answers: [
            { text: "alertBox('Hello World');", correct: false},
            { text: "msg('Hello World');", correct: false},
            { text: "msgBox('Hello World');", correct: false},
            { text: "alert('Hello World')", correct: true}
        ]
    },
    {
        question: "Która funkcja jest używana do parsowania ciągu znaków na liczbę całkowitą w JavaScript?",
        answers: [
            { text: "parseNumber()", correct: false},
            { text: "parseInt()", correct: true},
            { text: "arseFloat()", correct: false},
            { text: "int()", correct: false}
        ]
    },
    {
        question: "Który z poniższych jest operatorem logicznym w JavaScript?",
        answers: [
            { text: "::", correct: false},
            { text: "**", correct: false},
            { text: "&&", correct: true},
            { text: "#", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})



startQuiz();
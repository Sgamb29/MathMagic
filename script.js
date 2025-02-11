
let currentNumber = 0;
let secondCurrentNum = 0;
let op = "";

// Get what type of question to use based off of what link is clicked on home page.
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

// Generation is for generating the right kind of question.
// Check is for checking the right kind of question.
let functionToUse = generateTwoDigitNumEndIn5;

const questionOutput = document.getElementById("questionOutput");
const questionInput = document.getElementById("questionInput");


function generateQuestion() {
    functionToUse();
}

// Functions for Squaring numbers that end in 5
function generateTwoDigitNumEndIn5(redo=false) {
    op = "**";
    if (!redo) {
        currentNumber = parseInt(getRandInt(9, 1).toString() + "5");
    }
    // (Currentnum squared)
    secondCurrentNum = 2;
    questionOutput.innerText = `What is ${currentNumber} squared?`;
    questionInput.value = "";
}


// Functions for Multiply 2 digit numbers by eleven.
function generateTwoDigitNum(redo=false) {
    op = "*";
    if (!redo) {
        const num = getRandInt(99, 10);
        currentNumber = num;
    }
    secondCurrentNum = 11;
    questionOutput.innerText = `What is ${currentNumber} multiplied by 11?`;
    questionInput.value = "";
}

// Functions for simplifying addition.
function generateTwoLargerNumbers(redo=false) {
    op = "+";
    if (!redo) {
        currentNumber = getRandInt(999, 100);
        secondCurrentNum = getRandInt(999, 10);
    }
    questionOutput.innerText = `What is ${currentNumber} + ${secondCurrentNum}?`;
    questionInput.value = "";
}


function checkAnswer() {
    const answer = parseInt(questionInput.value); 
    let correctAnswer = 0;
    switch (op) {
        case "*":
            correctAnswer = currentNumber * secondCurrentNum;
            break;
        case "+":
            correctAnswer = currentNumber + secondCurrentNum;
            break;
        case "**":
            correctAnswer = currentNumber**secondCurrentNum;
            break;
        default:
            correctAnswer = 0;
            break;
    }
    if (answer === correctAnswer) {
        questionOutput.innerText = `${answer} is correct!`;
    } else {
        questionOutput.innerText = `Nope, answer was ${correctAnswer}`;
    }

}

// For multiplication table practice
function generateMultiplicationQuestion(redo=false) {
    op = "*";
    if (!redo) {
        currentNumber = getRandInt(10, 2);
        secondCurrentNum = getRandInt(10, 2);
    }
    questionOutput.innerText = `What is ${currentNumber} multiplied by ${secondCurrentNum}?`;
    questionInput.value = "";

}


// Keypresses for questions and next question instead of using buttons.
document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && questionInput.value) {
        checkAnswer();
    }
    if (e.key === " ") {
        // generateTwoDigitNumEndIn5();
        functionToUse();
    }
})

function getRandInt(max, min=0) {
    let num = Math.floor(Math.random() * max);
    if (num < min) {
        num += min;
    }
    return num;
}

function redoQuestion() {
    functionToUse(true);

}

switch (type) {
    case "squareNums":
        functionToUse = generateTwoDigitNumEndIn5;
        break;
    case "multiplyEleven":
        functionToUse = generateTwoDigitNum;
        break;
    case "simplifyAdd":
        functionToUse = generateTwoLargerNumbers;
        break;
    case "multiplicationTables":
        functionToUse = generateMultiplicationQuestion;
        break;
    default:
        functionToUse = generateTwoDigitNumEndIn5;
        break;
}


// Initial setup question.
functionToUse();
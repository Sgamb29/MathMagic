
let currentNumber = 0;
let secondCurrentNum = 0;
let op = "";

// Get what type of question to use based off of what link is clicked on home page.
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

const infoPageLink = document.getElementById("infoPageLink");
infoPageLink.href = "./infoPage.html?type=" + type;
if (type === "multiplicationTables") {
    infoPageLink.hidden = true;
} else {
    infoPageLink.hidden = false;
}
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
    op = type === "simplifySubtract" ? "-" : "+";
    if (!redo) {
        currentNumber = getRandInt(999, 100);
        secondCurrentNum = getRandInt(999, 10);
        if (op === "-" && secondCurrentNum > currentNumber) {
            const temp = secondCurrentNum;
            secondCurrentNum = currentNumber;
            currentNumber = temp;
        }

    }
    questionOutput.innerText = `What is ${currentNumber} ${op} ${secondCurrentNum}?`;
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
        case "-":
            correctAnswer = currentNumber-secondCurrentNum;
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
    let max1;
    let max2;
    let min1;
    let min2;
    switch (type) {
        case "twoByOne":
            max1 = 99;
            max2 = 12;
            min1 = 10;
            min2 = 2;
            break;
        case "threeByOne":
            max1 = 999;
            max2 = 10;
            min1 = 100;
            min2 = 2;
            break;
        case "twoByTwo":
            max1 = 99;
            max2 = 99;
            min1 = 10;
            min2 = 10;
            break;
        default:
            max1 = 10;
            max2 = 12;
            min1 = 2;
            min2 = 2;
            break;

    }
    if (!redo) {
        currentNumber = getRandInt(max1, min1);
        secondCurrentNum = getRandInt(max2, min2);
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
    case "simplifySubtract":
        functionToUse = generateTwoLargerNumbers;
        break;
    case "twoByOne":
        functionToUse = generateMultiplicationQuestion;
        break;
    case "threeByOne":
        functionToUse = generateMultiplicationQuestion;
        break;
    case "twoByTwo":
        functionToUse = generateMultiplicationQuestion;
        break;
    default:
        functionToUse = generateTwoDigitNumEndIn5;
        break;
}

// console.log(type);
// Initial setup question.
functionToUse();
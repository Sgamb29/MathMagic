let currentNumber = 0;
let secondCurrentNum = 0;
let op = "";
const formatKey = "formatHistory";

const questionOutput = document.getElementById("questionOutput");
const questionInput = document.getElementById("questionInput");
const extraNote = document.getElementById("extraNote");

let num1Digits = 1;
let num2Digits = 1;
let operatorOptions = [];

let formatParsed = false;

function parseFormat() {
    const inputEl = document.getElementById("formatInput"); 
    if (inputEl.value === "") {
        return;
    }
    const values = inputEl.value.split(",");
    if (values.length !== 3) {
        questionOutput.innerText = "Format error: format has to be 3 comma seperated values.";
        return;
    }
    if (parseInt(values[0]) > 0 && parseInt(values[1]) > 0) {
        num1Digits = parseInt(values[0]);
        num2Digits = parseInt(values[1]);
    } else {
        questionOutput.innerText = "Number error: number of digits has to be 1 or more.";
        return;
    }

    operatorOptions = [];
    for (let i = 0; i < values[2].length; i++) {
        let v = values[2][i];
        if (v === "*" || v === "/" || v === "+" || v === "-") {
            operatorOptions.push(v);
        }
    }
    if (operatorOptions.length === 0 || operatorOptions.length > 4) {
        questionOutput.innerText = "Operations error: There has to be 1-4 different operations";
        return;
    }
    formatParsed = true;
    setCookie(formatKey, inputEl.value, 1000);
    generateQuestion();
}

function generateQuestion() {
    if (!formatParsed) {
        return;
    }
    currentNumber = getVarLenNum(num1Digits);
    secondCurrentNum = getVarLenNum(num2Digits);
    op = operatorOptions[getRandInt(operatorOptions.length)];
    questionOutput.innerText = `What is ${currentNumber} ${op} ${secondCurrentNum}?`;
}

function getVarLenNum(numDigits) {
    let n = "";
    for(let i = 0; i < numDigits; i++) {
        let m = n.length > 0 ? 0 : 1;
        n = n + getRandInt(9, m)
    }
    return parseInt(n);
}



function checkAnswer() {
    if (!formatParsed) {
        return;
    }
    const answer = parseFloat(questionInput.value); 
    let correctAnswer = 0;
    switch (op) {
        case "*":
            correctAnswer = currentNumber * secondCurrentNum;
            break;
        case "+":
            correctAnswer = currentNumber + secondCurrentNum;
            break;
        case "/":
            n = currentNumber / secondCurrentNum;
            correctAnswer = parseFloat(n.toFixed(2));
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

function getRandInt(max, min=0) {
    let num = Math.floor(Math.random() * max);
    if (num < min) {
        num += min;
    }
    return num;
}

let presses = 0; // Presses is for getting another question on 2nd enter press
function redoQuestion() {
    if (!formatParsed) {
        return;
    }
    presses = 0; // Reset if want to redo question
    questionInput.value = "";
    questionOutput.innerText = `What is ${currentNumber} ${op} ${secondCurrentNum}?`;

}

document.addEventListener("keydown", (e) => {
    if (presses === 1) {
        generateQuestion();
        presses = 0;
        questionInput.value = "";
        return;
    }
    if (e.key === 'Enter' && questionInput.value) {
        checkAnswer();
        presses += 1;
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const h = getCookie(formatKey);
    document.getElementById("formatInput").value = h !== "" ? h : "";
})


function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
    try {
        const value = document.cookie.split(`${name}=`)[1].split(";")[0];
        return value;
        } catch {
            return "";
        }
        
}



// Get what type of question to teach based off link clicked on home.
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const practiceLink = document.getElementById("practiceLink");

let infoVarToUse = null;

// Initializing info variables.
const multiplyEleven = {
    title: "How to multiply any 2 digit number by 11:",
    text: "Put the sum of the two digits IN BETWEEN the two digits.\nExample: 23 x 11: 2+3 = 5 so 23 x 11 is 253.\nExample: 33 x 11: 3+3 = 6 so 33 x 11 = 363.\nBUT when the sum of the two numbers is 10 or more you add one to the first digit and put what remains in between the digits.\nExample: 69 x 11: 6+9 = 15 so 69 * 11 is 759 NOT 6159.\nExample: 99 x 11: 9+9 = 18 so 99 x 11 = 1089.\n",
    practice: "multiplyEleven",
}

const squareNumsEndIn5 = {
    title: "How to square all 2 digit numbers that end in 5:",
    text: "Multiply the first digit by the NEXT HIGHEST NUMBER and then put 25 at the end.\nExample: 35 squared: 3*4 = 12 so 35 squared = 1225.\nExample: 95 squared: 9*10 = 90 so 95 squared = 9025.\n",
    practice: "squareNums",
}

const simplifyAddition = {
    title: "Simplify your addition problems:",
    text: "The goal is to break the problem down into simpler steps working left to right.\nExample: 742 + 231 First you do 742 + 200 = 942 then 942 + 30 = 972 then 972 + 1 = 973. And that's your answer!\nExample: 374 + 325. First: 374 + 300 = 674 then 674 + 20 = 694 then 694 + 5 = 699",
    practice: "simplifyAdd"
}

const simplifySubtract = {
    title: "Simplify your subtraction problems:",
    text: "Just like breaking down the addition problems you want to work left to right. For 963 - 342 you would do 963 - 300 = 663, 663 - 40 = 623, and 623 - 2 = 621.",
    practice: "simplifySubtract"
}

const twoByOne = {
    title: "Two digits by one digit multiplication.",
    text: "Working left to right you want to break the problem down. For example 43 x 3: You would do 40 x 3 (which is the same as 4x3 multiplied by 10) 120 + 3 x 3 or 120 + 9 = 129. It's useful to know your multiplication tables to 10 for these problems!",
    practice: "twoByOne"
}

const threeByOne = {
    title: "Three digits by one digit multiplication.",
    text: "Working left to right you want to break the problem down. For example 435 x 5: You would do 400 x 5 (which is the same as 4x5 multiplied by 100) 2000. Then you would do 30 x 5 = 150, so we're at 2150, and then finally add 5 x 5 = 25 to get the answer of 2175.",
    practice: "threeByOne"
}

const twoByTwo = {
    title: "Two digits by two digits multiplication.",
    text: "1. The Addition Method: You break up one of the numbers and then multiply, adding your answers together. Example: 43 x 22, first do 20 x 43 = 860 and then 2 x 43 = 86. 860 + 86 = 946 which is your answer!\n2. The Subtraction Method: Useful is one of the numbers ends in an 8 or 9. Example: 88 x 64. You would round 88 to 90 and then multiply: 60 x 90 = 5400, 4 x 90 = 360, so we're at 5760 and then subtract the extra we multiplied by which is 64 x 2 = 128, 5760 - 128 = 5632 and there's our answer.\n3. The Factoring Method: You break down one of the numbers into two factors and multiply so you only have to do one 2 by 1 question and one 3 by 1 question. Example: 64 x 56. 56 = 8 x 7 so you would do 64 x 8 = 512 and then 512 x 7 = 3584 and there's our answer.",
    practice: "twoByTwo"
}

switch (type) {
    case "multiplyEleven":
        infoVarToUse = multiplyEleven;
        break;
    case "squareNums":
        infoVarToUse = squareNumsEndIn5;
        break;
    case "simplifyAdd":
        infoVarToUse = simplifyAddition;
        break;
    case "simplifySubtract":
        infoVarToUse = simplifySubtract;
        break;
    case "twoByOne":
        infoVarToUse = twoByOne;
        break;
    case "threeByOne":
        infoVarToUse = threeByOne;
        break;
    case "twoByTwo":
        infoVarToUse = twoByTwo;
        break;
    default:
        infoVarToUse = multiplyEleven;
        break;

}



// Main function call for the page:
infoTitle.innerText = infoVarToUse.title;
infoText.innerText = infoVarToUse.text;
practiceLink.href = "./questionPage.html?type=" + infoVarToUse.practice;
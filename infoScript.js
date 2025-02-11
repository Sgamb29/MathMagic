

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
    default:
        infoVarToUse = multiplyEleven;
        break;

}



// Main function call for the page:
infoTitle.innerText = infoVarToUse.title;
infoText.innerText = infoVarToUse.text;
practiceLink.href = "./questionPage.html?type=" + infoVarToUse.practice;
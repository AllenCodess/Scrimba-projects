// make a function that adds 1,2,3 when button clicked

let homeScoreOne = document.getElementById("home-score")
let awayScoreOne = document.getElementById("away-score")

function addOneHome() {
    let currentScore = Number(homeScoreOne.textContent) // this converts the string into a number
    homeScoreOne.textContent = currentScore + 1
}

function addTwoHome() {
    let currentScore = Number(homeScoreOne.textContent) // this converts the string into a number
    homeScoreOne.textContent = currentScore + 2
}

function addThreeHome() {
    let currentScore = Number(homeScoreOne.textContent) // this converts the string into a number
    homeScoreOne.textContent = currentScore + 3
}

function addOneAway() {
    let currentScore = Number(awayScoreOne.textContent) // this converts the string into a number
    awayScoreOne.textContent = currentScore + 1
}

function addTwoAway() {
    let currentScore = Number(awayScoreOne.textContent) // this converts the string into a number
    awayScoreOne.textContent = currentScore + 2
}

function addThreeAway() {
    let currentScore = Number(awayScoreOne.textContent) // this converts the string into a number
    awayScoreOne.textContent = currentScore + 3
}
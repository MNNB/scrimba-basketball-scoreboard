let homeScore = 0
let guestScore = 0

function increaseHome1() {
    console.log("home +1")
    document.getElementById("home-score").innerText = homeScore += 1
}

function increaseHome2() {
    console.log("home +2")
    document.getElementById("home-score").innerText = homeScore += 2
}

function increaseHome3() {
    console.log("home +3")
    document.getElementById("home-score").innerText = homeScore += 3
}


function increaseGuest1() {
    console.log("guest +1")
    document.getElementById("guest-score").innerText = guestScore += 1
}

function increaseGuest2() {
    console.log("guest +2")
    document.getElementById("guest-score").innerText = guestScore += 2
}

function increaseGuest3() {
    console.log("guest +3")
    document.getElementById("guest-score").innerText = guestScore += 3
}

function resetScore() {
    console.log("reset game")
    document.getElementById("guest-score").innerText = guestScore = 0
    document.getElementById("home-score").innerText = homeScore = 0
}
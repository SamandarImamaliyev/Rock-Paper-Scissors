const nameInput = document.querySelector("#name");
const startButton = document.getElementById("startButton");
const userName = document.querySelector(".userName");
const startSection = document.querySelectorAll(".startSection");
const game = document.querySelectorAll(".game");
const info = document.querySelector(".game-conditions");
const userImage = document.querySelector(".userImage");
const botImage = document.querySelector(".botImage");
const userScore = document.querySelector(".userScore");
const botScore = document.querySelector(".botScore");

let botNumber;
let userNumber;
let user = 0;
let bot = 0;

startButton.addEventListener("click", () => {
    startGame();
})

function startGame() {
    if (!(nameInput.value.trim().length > 2)) {
        alert("write your name!");
    } else {
        startSection.forEach((item) => {
            item.classList.add("d-none");
        });
        game.forEach((item) => {
            item.classList.remove("d-none");
            item.classList.add("d-block");
        });
        info.classList.remove("d-none");
        userName.textContent = (nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1));
    }
    chooseMove();
}

function chooseMove() {
    window.addEventListener("keydown", (event) => {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (user == 5 || bot == 5) {
                alert("Game over!");
            } else {
                if ((event.key).toLowerCase() == "r" || (event.key).toLowerCase() == "p" || (event.key).toLowerCase() == "s") {
                    if ((event.key).toLowerCase() == "r") {
                        userImage.src = "./image/rock.png";
                        userNumber = 1;
                    } else if ((event.key).toLowerCase() == "p") {
                        userImage.src = "./image/paper.png";
                        userNumber = 2;
                    } else if ((event.key).toLowerCase() == "s") {
                        userImage.src = "./image/scissors.png";
                        userNumber = 3;
                    }

                    getBotImage();
                    findWinner();
                } else {
                    alert("type only 'r','p','s'");
                }
            }
        }
    })
}

function getBotImage() {
    botNumber = (Math.floor(Math.random() * 3)) + 1;
    if (botNumber === 1) {
        botImage.src = "./image/rock.png";
    } else if (botNumber === 2) {
        botImage.src = "./image/paper.png";
    } else {
        botImage.src = "./image/scissors.png";
    }
}

function findWinner() {
    if (userNumber == botNumber) {

    } else if (userNumber == 1 && botNumber == 3) {
        user++;
    } else if (userNumber == 2 && botNumber == 1) {
        user++;
    } else if (userNumber == 3 && botNumber == 2) {
        user++;
    } else {
        bot++;
    }
    userScore.textContent = user;
    botScore.textContent = bot;
}
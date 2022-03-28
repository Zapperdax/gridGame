let boxes = document.querySelectorAll(".col");
let start = document.getElementById("start");
let body = document.querySelector("body");
let started = false;
let gameChosenPattern = [];
let userChosenPattern = [];
let wrong = new Audio("wrong.mp3");
let sound = new Audio("green.mp3");
function RandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9);
    gameChosenPattern.push((randomNumber).toString());
    console.log(gameChosenPattern);
    boxes[randomNumber].classList.add("makeRed");
    setTimeout(function () {
        boxes[randomNumber].classList.remove("makeRed");
    }, 2000);
    console.log(userChosenPattern.length);
    console.log(gameChosenPattern.length);
    if(gameChosenPattern.length - 1 > userChosenPattern.length){
        gameOver();
    }
}

start.addEventListener("click", function () {
    started = true;
    document.getElementById("start").disabled = true;
    start.style.backgroundColor = "grey";
    if (started == true) {
        setInterval(RandomNumber, 4000);
        document.querySelectorAll(".col").forEach(box => {
            box.addEventListener("click", function () {
                sound.play();
                userChosenPattern.push(box.innerText);
                checkAnswer(box);
                console.log(userChosenPattern);
            });
        });
    }
});

function checkAnswer(box1) {
    
    if((JSON.stringify(userChosenPattern)) === (JSON.stringify(gameChosenPattern))) {
        console.log("Good");
        box1.classList.add("makeGreen");
        setTimeout(function () {
            box1.classList.remove("makeGreen");
        }, 1000);
    }

    else {
        box1.classList.add("makeRed");
        setTimeout(function(){
            box1.classList.remove("makeRed");
        },500);
        gameOver();
    }
}

function gameOver(){
    gameChosenPattern = [];
    userChosenPattern = [];
    started = false;
    document.getElementById("start").disabled = false;
    start.style.backgroundColor = "purple";
    body.classList.add("makeYellow");
    setTimeout(function(){
        body.classList.remove("makeYellow");
    },1000);
    wrong.play();
    alert("Game Over");
    setInterval(function(){
        window.location.reload();
    },2000);
}
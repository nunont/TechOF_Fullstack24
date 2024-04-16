var arr = ["images/hat.png", "images/boat.png", "images/short.png"];
var arrWord = ["hat", "boat" ,"shirt"];
var counter = 0;
var i = selectRandomImage();
var score = 0;
var highScore = 0;
document.body.classList.add('backGroundBody');
let btnPlayAgain = document.querySelector('.playAgain');

document.querySelector(".play").addEventListener('click', play);

function play(){
    counter++;

    if (counter <= 3) {
        let word = arrWord[i];
        let letter = document.getElementById("input").value;

        if (!letter){
            document.querySelector(".message").textContent = "No Letter 🥵 ";
            score -= 2;
        }
        else if (letter == word[0]) {
            document.querySelector(".message").textContent = "correct Answer🤙 ";
            score += 5;
        }
        else if (letter != word[0]){
            document.querySelector(".message").textContent = "not correctAnswer 👎";
            score -= 3;
        }
        document.getElementById("input").value = '';
        document.querySelector(".score").innerText = score;

        if (counter < 3) {
            i = selectRandomImage();
        }
    }
}

function selectRandomImage(){

    document.querySelector('.countQuestion').innerText = `Question Number ${counter}`;

    var index = randomNumber(3);

    var image = arr[index];
    document.getElementById("imgToGuess").src = image;

    return index;
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

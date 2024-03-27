const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const label1Player1 = document.getElementById("label1Player1");
const label1Player2 = document.getElementById("label1Player2");
const label2Player1 = document.getElementById("label2Player1");
const label2Player2 = document.getElementById("label2Player2");
const label3Player1 = document.getElementById("label3Player1");
const label3Player2 = document.getElementById("label3Player2");
const player1Score = document.getElementById("score1");
const player2Score = document.getElementById("score2");
document.getElementById("player1Btn").disabled = true
document.getElementById("player2Btn").disabled = true

const mix = 1;
const max = 13;
let randomNum1;
let randomNum2;
let randomNum12;
let randomNum22;
let randomNum13;
let randomNum23;
let score1;
let score2;

startBtn.onclick = function(){
    document.getElementById("player1Btn").disabled = false
    document.getElementById("player2Btn").disabled = false
    document.getElementById("start").disabled = true
    randomNum1 = Math.floor(Math.random() * max) + mix;
    randomNum2 = Math.floor(Math.random() * max) + mix;
    label1Player1.textContent = randomNum1;
    if(randomNum1 > 10){
        score1 = 0;
    }else if (randomNum1 == 10){
        score1 = 0;
    }else{
        score1 = randomNum1;
    }

    label1Player2.textContent = randomNum2; 
    if(randomNum2 > 10){
        score2 = 0;
    }else if (randomNum2 == 10){
        score2 = 0;
    }else{
        score2 = randomNum2;
    }

    randomNum12 = Math.floor(Math.random() * max) + mix;
    randomNum22 = Math.floor(Math.random() * max) + mix;
    label2Player1.textContent = randomNum12;
    if(randomNum12 > 10){
        score1 = score1;
    }else if (randomNum12 == 10){
        score1 = score1;
    }else{
        score1 = score1 + randomNum12;
    }
    label2Player2.textContent = randomNum22;
    if(randomNum22 > 10){
        score2 = score2;
    }else if (randomNum22 == 10){
        score2 = score2;
    }else{
        score2 = score2 + randomNum22;
    }


    if(score1 >= 10){
        score1 = score1 - 10;
        player1Score.textContent = score1;  
    }else{
        player1Score.textContent = score1;
    }

    if(score2 >= 10){
        score2 = score2 - 10;
        player2Score.textContent = score2; 
    }else{
        player2Score.textContent = score2;
    }
    
   

player1Btn.onclick = function(){
    document.getElementById("player1Btn").disabled = true
    randomNum13 = Math.floor(Math.random() * max) + mix;
    label3Player1.textContent = randomNum13;
    if(randomNum13 > 10){
        score1 = score1;
    }else if (randomNum13 == 10){
        score1 = score1;
    }else{
        score1 = score1 + randomNum13;
    }
    console.log(score1);

    if(score1 >= 10){
        score1 = score1 - 10;
        player1Score.textContent = score1;  
    }else{
        player1Score.textContent = score1;
    }
}
player2Btn.onclick = function(){
    document.getElementById("player2Btn").disabled = true
    randomNum23 = Math.floor(Math.random() * max) + mix;
    label3Player2.textContent = randomNum23; 
    if(randomNum23 > 10){
        score2 = score2;
    }else if (randomNum23 == 10){
        score2 = score2;
    }else{
        score2 = score2 + randomNum23;
    }
    console.log(score2);
    
if(score2 >= 10){
    score2 = score2 - 10;
    player2Score.textContent = score2; 
}else{
    player2Score.textContent = score2;
}
}




}

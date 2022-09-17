let timeEl = document.getElementById('time');
let scoreEl = document.getElementById('score');
let insect = document.getElementById('insect');
let popup = document.getElementById('popup');


let gameContainer = document.querySelector('.gameboard');

let score=0;

insect.addEventListener('click',()=>{
    scoreIncrementer();
    drawInsect();
    
})

let x,y;
function insectPos() {
    x = Math.random()*(window.innerWidth-50);
    y = Math.random()*(window.innerHeight-150) ;
    return {x,y};
}


function drawInsect(){
    insectPos();

    insect.style.left = `${x}px`;
    insect.style.top = `${y}px`;
    insect.style.transform = `rotate(${Math.random()*360}deg)`;

}


function scoreIncrementer(){
    score++;
    scoreEl.innerText = `Score : ${score}`
}




let s = 59;
function timeCounter(){
    let time = (s<10)? `0${s}`: `${s}`;
    timeEl.innerText = `Time Left- 00:${time}`;
    s--;
}

function liveTime(){
    if(s>0){
        timeCounter();
    }
    else if(s==0){
        timeEl.innerText = `Time Left- 00:00`;
        insect.style.visibility = 'hidden';
        gameContainer.disabled = true;
        popup.style.visibility = 'visible';
        popup.innerHTML = `Game Over<br>Your Score : ${score}<br>Game Restarting in 3,2,1...`;
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}

setInterval(liveTime, 1000);

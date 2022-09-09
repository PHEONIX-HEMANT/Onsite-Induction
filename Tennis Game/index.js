
let context = canvas.getContext("2d");


let ballX = 400;
let ballY = 200;

let ballSpeedX = 12;
let ballSpeedY = 5;

let paddle1Y = 150 ;
let paddle2Y = 150 ;
let paddleHeight = 70;

let mouseX;
let mouseY;

let player1score=0;
let player2score=0;

let fps = 30;
setInterval(function(){
    moveBall();
    movePaddle2();
    // console.log("Hello !")
    draw();
    // drawBall();
},1000/fps);

function draw(){
    context.fillStyle = "rgb(75, 150, 163)";
    context.fillRect(0,0,800, 400);

    context.fillStyle = "rgb(73, 21, 107)";
    context.fillRect(0,paddle1Y,8,paddleHeight);

    context.fillStyle = "rgb(73, 21, 107)";
    context.fillRect(canvas.width-10,paddle2Y,10,paddleHeight);
    
    context.fillStyle = "red";
    context.beginPath();
    context.arc(ballX, ballY , 7, 0, 2*Math.PI, true);
    context.fill();

}
function moveBall(){
    // console.log("Hello")
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if(ballX > canvas.width){
        if(ballY > paddle2Y && ballY < paddle2Y + paddleHeight){
        ballSpeedX = -ballSpeedX;
        player2score++;
        }
        else 
        reset();
    }
    else if(ballX<0){
        if(ballY > paddle1Y && ballY < paddle1Y + paddleHeight){
        ballSpeedX = -ballSpeedX;
        player1score++;
        }
        else 
        reset();
    }
    if(ballY > 400){
        ballSpeedY = -ballSpeedY;
    }
    else if(ballY <0){
        ballSpeedY = -ballSpeedY;
    }

    let score1 = document.getElementById('p1');
    let score2 = document.getElementById('p2');

    score1.innerText = `Player 1 Score : ${player1score}`;
    score2.innerText = `Player 2 Score : ${player2score}`;
}

function movePaddle2(){
    let paddle2YCenter = paddle2Y + paddleHeight/2;

    if(paddle2YCenter < ballY){
        paddle2Y += 5;
    }else if(paddle2YCenter > ballY){
        paddle2Y  -= 6;
    }
}

function reset(){
    ballSpeedX = -ballSpeedX;
    ballX=400;
    ballY=200;
    player1score = 0;
    player2score = 0;
}

function calMousePos(evt){
    var rect = canvas.getBoundingClientRect();

    mouseX = evt.clientX - rect.left;
    mouseY = evt.clientY - rect.top;

    return{
        x:mouseX,
        y:mouseY
    };

}

var mousePos;
canvas.addEventListener('mousemove',function(evt){
    mousePos = calMousePos(evt);
    paddle1Y = mousePos.y - paddleHeight/2;

})

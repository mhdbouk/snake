var snake;
var scl = 10;
var food;
var startButton;
var pauseButton;
var gameStatus = false;
var isPaused = false;
function setup() {
    var cnv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    //snake = new Snake();
    frameRate(10);

    startButton = createButton('Start!');
    startButton.mousePressed(StartGame);
    pauseButton = createButton('Pause');
    pauseButton.mousePressed(PauseGame);
}

function PauseGame() {
    isPaused = true;
    gameStatus = false;
}

function StartGame() {
    if (!isPaused) {
        snake = new Snake();
        CreateFood();
    }
    gameStatus = true;
}

function CreateFood() {
    var col = floor(width / scl);
    var row = floor(height / scl);

    food = createVector(floor(random(col)), floor(random(row)));
    food.mult(scl);
}

function draw() {
    background(50);
    if (snake != undefined) {
        snake.Show();
        fill(255, 0, 0);
        rect(food.x, food.y, scl, scl);
    }
    if (gameStatus) {
        if (snake.Death()) {
            alert("Game Over");
            CreateFood();
        }
        snake.Update();


        if (snake.Eat(food)) {
            CreateFood();
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.SetDirection(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.SetDirection(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.SetDirection(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.SetDirection(1, 0);
    }
}
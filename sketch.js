var snake;
var scl = 10;
var food;
function setup(){
	createCanvas(600,600);
	snake = new Snake();
	frameRate(10);
	CreateFood();
}

function CreateFood(){
	var col = floor(width / scl);
	var row = floor(height / scl);
	
	food = createVector(floor(random(col)), floor(random(row)));
	food.mult(scl);
}

function draw(){
	background(50);
	if (snake.Death()) {
	    alert("Game Over");
	    CreateFood();
	}
	snake.Show();
	snake.Update();
	
	fill(255,0,0);
	rect(food.x, food.y, scl, scl);
	
	if (snake.Eat(food)) {
		CreateFood();
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
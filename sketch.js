function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
	game  = new Game();
	snake = new Snake();
	apple = new Apple();

	frameRate(10);
	createCanvas(game.width, game.height);
}

function draw() {
	background(50);

	snake.changePosition();

	if (snake.isCollision()) {
		snake.die();
		game.over();
	}

	if (apple.isEaten()) {
		game.score++;
		apple.changePosition();
		snake.grow();
	}

	snake.draw();
	apple.draw();
}

function keyPressed() {
	snake.changeDirection();

	if (keyCode === 32) {
		game.restart();
	}
}

var game;
var snake;
var apple;

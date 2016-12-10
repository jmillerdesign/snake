function Game() {
	this.over = function () {
		background(175, 0, 0);

		textAlign(CENTER, CENTER);
		fill(255);
		stroke(1);
		textSize(32);
		text('GAME OVER', 0, 0, this.width, this.height - 20);

		textSize(16);
		text('Score: ' + snake.tail.length, 0, 20, this.width, this.height);

		textSize(16);
		text('Press [spacebar] to play again', 0, 110, this.width, this.height);

		noLoop();
	}

	this.restart = function () {
		background(50);
		snake.reset();
		loop();
	}

	this.grid = 25;
	this.width = 25 * this.grid;
	this.height = 15 * this.grid;
}

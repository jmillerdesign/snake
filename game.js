function Game() {
	this.over = function () {
		background(175, 0, 0);

		setTimeout(function () {
			textAlign(CENTER, CENTER);
			fill(255);
			stroke(1);
			textSize(32);
			text('GAME OVER', 0, 0, game.width, game.height - 20);

			textSize(16);
			text('Score: ' + game.score, 0, 20, game.width, game.height);

			textSize(16);
			text('Press [spacebar] to play again', 0, 110, game.width, game.height);
		}, 0);

		noLoop();
	}

	this.restart = function () {
		this.score = 0;
		background(50);
		snake.reset();
		loop();
	}

	this.score  = 0;
	this.grid   = 25;
	this.width  = 35 * this.grid;
	this.height = 20 * this.grid;
}

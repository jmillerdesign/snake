function Apple() {
	this.isEaten = function () {
		return (snake.x === this.x) && (snake.y === this.y);
	}

	this.pickCoordinate = function (max) {
		max = Math.min(max, max - game.grid); // Don't start 1 cell past edge
		return Math.round(randomInt(0, max) / game.grid) * game.grid;
	}

	this.changePosition = function () {
		this.x = this.pickCoordinate(game.width);
		this.y = this.pickCoordinate(game.height);

		// Pick a spot that doesn't collide with the tail
		// TODO: Better algorithm rather than randomly trying until successful?
		for (var i = snake.tail.length - 1; i >= 0; i--) {
			if ((snake.tail[i].x === this.x) && (snake.tail[i].y === this.y)) {
				this.changePosition();
			}
		}
	}

	this.draw = function () {
		fill('orange');
		noStroke();
		rect(this.x, this.y, game.grid, game.grid);
	}

	this.x = this.pickCoordinate(game.width);
	this.y = this.pickCoordinate(game.height);
}

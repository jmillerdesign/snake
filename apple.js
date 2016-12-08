function Apple() {
	this.isEaten = function () {
		return (snake.x === this.x) && (snake.y === this.y);
	}

	this.pickCoordinate = function (max) {
		max = Math.min(max, max - game.grid); // Don't start 1 cell past edge
		return Math.round(randomInt(0, max) / game.grid) * game.grid;
	}

	this.changePosition = function () {
		this.x = this.pickCoordinate(width);
		this.y = this.pickCoordinate(height);
	}

	this.draw = function () {
		fill('orange');
		noStroke();
		rect(this.x, this.y, game.grid, game.grid);
	}

	this.x = this.pickCoordinate(width);
	this.y = this.pickCoordinate(height);
}

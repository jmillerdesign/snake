function Snake() {
	this.changeDirection = function () {
		if ((keyCode === UP_ARROW) && (this.yDirection != game.grid)) {
			this.xDirection = 0;
			this.yDirection = game.grid * -1;
		} else if ((keyCode === DOWN_ARROW) && (this.yDirection != game.grid * -1)) {
			this.xDirection = 0;
			this.yDirection = game.grid;
		} else if ((keyCode === LEFT_ARROW) && (this.xDirection != game.grid)) {
			this.xDirection = game.grid * -1;
			this.yDirection = 0;
		} else if ((keyCode === RIGHT_ARROW) && (this.xDirection != game.grid * -1)) {
			this.xDirection = game.grid;
			this.yDirection = 0;
		}
	}

	this.changePosition = function () {
		this.tail.unshift({x: this.x, y: this.y});
		this.tail = this.tail.slice(0, this.tail.length - 1);

		this.x += this.xDirection;
		this.y += this.yDirection;
	}

	this.grow = function () {
		this.tail.push({x: this.x, y: this.y});
	}

	this.draw = function () {
		fill(this.color);
		noStroke();
		rect(this.x, this.y, game.grid, game.grid);
		for (var i = this.tail.length - 1; i >= 0; i--) {
			rect(this.tail[i].x, this.tail[i].y, game.grid, game.grid);
		}
	}

	this.isCollision = function () {
		// Did we eat our tail?
		for (var i = this.tail.length - 1; i >= 0; i--) {
			if ((this.tail[i].x === this.x) && (this.tail[i].y === this.y)) {
				return true;
			}
		}

		// Outside bounds?
		return (
			(this.x >= width) ||
			(this.x < 0) ||
			(this.y >= height) ||
			(this.y < 0)
		);
	}

	this.die = function () {
		this.color = 50;
	}

	this.reset = function () {
		this.color = 255;
		this.x = 0 - game.grid;
		this.y = 0;
		this.xDirection = game.grid;
		this.yDirection = 0;
		this.tail = [];
	}

	this.reset();
}

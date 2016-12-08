function Snake() {
	this.size = 20;
	this.x = 0;
	this.y = 0;
	this.xDirection = this.size;
	this.yDirection = 0;

	this.update = function () {
		this.changeDirection();
		this.changePosition();
		this.draw(this.x, this.y);
	}

	this.changeDirection = function () {
		if (keyCode === UP_ARROW) {
			this.xDirection = 0;
			this.yDirection = this.size * -1;
		} else if (keyCode === DOWN_ARROW) {
			this.xDirection = 0;
			this.yDirection = this.size;
		} else if (keyCode === LEFT_ARROW) {
			this.xDirection = this.size * -1;
			this.yDirection = 0;
		} else if (keyCode === RIGHT_ARROW) {
			this.xDirection = this.size;
			this.yDirection = 0;
		}
	}

	this.changePosition = function () {
		this.x += this.xDirection;
		this.y += this.yDirection;
	}

	this.draw = function (x, y) {
		fill(255);
		rect(x, y, this.size, this.size);
	}
}

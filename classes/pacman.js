class Pacman {
	constructor(obj) {
		this.posX = obj.posX || 100;
		this.posY = obj.posY || 200;
		this.speed = 3;

		this.currentAngle = "left";

		this.angles = {
			left: [235, 135],
            right: [20, 325],
            up: [325, 235],
            down: [120, 55],
		};
	}

	render() {
		push();
		translate(this.posX, this.posY);

		noStroke();
		fill(250, 222, 17);
		arc(
			150,
			200,
			50,
			50,
			this.angles[this.currentAngle][0],
			this.angles[this.currentAngle][1]
		);

		pop();
	}

	move() {

        if (keyIsDown(LEFT_ARROW)) {
            this.posX -= this.speed;
            this.currentAngle = "left";
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.posX += this.speed;
            this.currentAngle = "right";
        }
        if (keyIsDown(UP_ARROW)) {
            this.posY -= this.speed;
            this.currentAngle = "up";
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.posY += this.speed;
            this.currentAngle = "down";
        }
    }
}

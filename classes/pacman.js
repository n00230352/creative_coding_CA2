class Pacman {
    constructor(obj) {
        this.posX = obj.posX ||  width / 2;
        this.posY = obj.posY || height / 2 ; 
        this.speed = 2; 
        this.maxSpeed = 7;
        this.radius = 25; 

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
            0,
            0,
            this.radius * 2, 
            this.radius * 2, 
            this.angles[this.currentAngle][0],
            this.angles[this.currentAngle][1]
        );

        pop();
    }

    move(arena) {
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

        let leftBoundary = arena.arenaPosX - arena.arenaWidth / 2 + this.radius;
        let rightBoundary = arena.arenaPosX + arena.arenaWidth / 2 - this.radius;
        let topBoundary = arena.arenaPosY - arena.arenaHeight / 2 + this.radius;
        let bottomBoundary = arena.arenaPosY + arena.arenaHeight / 2 - this.radius;

        this.posX = constrain(this.posX, leftBoundary, rightBoundary);
        this.posY = constrain(this.posY, topBoundary, bottomBoundary);
    }

    increaseSpeed() {
        if (this.speed < this.maxSpeed) { 
        this.speed += 1;
        //console.log("Pacman's speed increased to:", this.speed);
    }
}

    reduceSpeed() {
        if (this.speed > 1) { 
            this.speed -= 1; 
            //console.log("Pacman's speed reduced to:", this.speed);
        } 
    }
}

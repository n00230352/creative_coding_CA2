class Arena {
	constructor(obj) {
		this.numGhosts = obj.numGhosts || 5;
		this.arenaWidth = obj.arenaWidth || 450;
		this.arenaHeight = obj.arenaHeight || 450;
		this.ghosts = obj.ghosts || [];
		this.arenaPosX = width / 2; 
		this.arenaPosY =  height / 2;
	}

	renderArena() {
        push();
        translate(this.arenaPosX, this.arenaPosY);
        fill(150, 150, 150);
        rect(-this.arenaWidth / 2, -this.arenaHeight / 2, this.arenaWidth, this.arenaHeight); 
        pop();
	}

	renderGhosts() {
		push();
		translate(this.arenaPosX, this.arenaPosY);
		this.ghosts.forEach((ghost, id) => {
			ghost.render(id);
		})
		pop();
	}

	generateghosts() {
		for (let i = 0; i < this.numGhosts; i++) {
			let num = random(0,1);
			if(num<0.5){
				this.ghosts.push(
					new Ghos({
						posX: random(0, this.arenaWidth),
						posY: random(0, this.arenaHeight),
					})
				);
			} 
		}
	}

	checkPos(ghost) {
		if (ghost.pos.x >= this.arenaWidth) {
			ghost.pos.x = 0;
			ghost.pos.y = map(ghost.pos.y, 0, this.arenaHeight, this.arenaHeight, 0);
		} else if (ghost.pos.x < 0) {
			ghost.pos.x = this.arenaWidth;
			ghost.pos.y = map(ghost.pos.y, 0, this.arenaHeight, this.arenaHeight, 0);
		}

        if (ghost.pos.y >= this.arenaWidth) {
			ghost.pos.y = 0;
			ghost.pos.x = map(ghost.pos.x, 0, this.arenaWidth, this.arenaWidth, 0);
		} else if (ghost.pos.y  < 0) {
			ghost.pos.y = this.arenaWidth;
			ghost.pos.x = map(ghost.pos.x, 0, this.arenaWidth, this.arenaWidth, 0);
		}
	}

	moveghosts() {
		this.ghosts.forEach((ghost) => {
			this.checkPos(ghost)
            ghost.move();
            
		});
	}  
}

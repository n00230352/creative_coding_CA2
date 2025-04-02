class Arena {
	constructor(obj) {
		this.numGhosts = obj.numGhosts || 5;
		this.arenaWidth = obj.arenaWidth || 450;
		this.arenaHeight = obj.arenaHeight || 450;
		this.ghosts = [];
		this.arenaPosX = width / 2;
		this.arenaPosY = height / 2;

		this.generateGhosts();
	}

	renderArena() {
		push();
		translate(this.arenaPosX, this.arenaPosY);
		fill(150, 150, 150);
		rect(
			-this.arenaWidth / 2,
			-this.arenaHeight / 2,
			this.arenaWidth,
			this.arenaHeight
		);
		pop();
	}

	renderGhosts() {
		push();
		//translate(this.arenaPosX, this.arenaPosY);
		this.ghosts.forEach((ghost) => {
			ghost.render();
		});
		pop();
	}

	generateGhosts() {
		for (let i = 0; i < this.numGhosts; i++) {
			this.ghosts.push(
				new Ghost({
					posX: random(0, this.arenaWidth),
					posY: random(0, this.arenaHeight),
				})
			);
		}
	}

	moveghosts() {
		this.ghosts.forEach((ghost) => {
			ghost.move();
		});
	}
}

class Arena {
	constructor(obj) {
		this.numGhosts = obj.numGhosts || 5;
		this.arenaWidth = obj.arenaWidth || 450;
		this.arenaHeight = obj.arenaHeight || 450;
		this.arenaPosX = obj.arenaPosX || width / 2;
		this.arenaPosY = obj.arenaPosY || height / 2;
		this.ghosts = [];
		this.ghostsEaten = 0; 
		this.generateGhosts();
	}

	renderArena() {
		push();
		translate(this.arenaPosX, this.arenaPosY);
		rectMode(CENTER);
		fill(150, 150, 150);
		rect(0, 0, this.arenaWidth, this.arenaHeight);
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

		checkCollisions(pacman) {
		let newGhosts = []; 
		for (let i = 0; i < this.ghosts.length; i++) {
			let ghost = this.ghosts[i];
			let distance = dist(pacman.posX, pacman.posY, ghost.posX, ghost.posY);
	
			if (distance < pacman.radius + ghost.radius) {
				console.log("Ghost eaten");
				this.ghostsEaten++;
    			console.log("Ghosts Eaten:", this.ghostsEaten);
			} else {
				newGhosts.push(ghost);
			}
		}
		this.ghosts = newGhosts;
		if (this.ghosts.length === 0) {
			console.log("All ghosts eaten! Total:", this.ghostsEaten);
			noLoop(); 
		}
	}
}

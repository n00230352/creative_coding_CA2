class Ghost {
    constructor(obj) { 
        this.posX = obj.posX || random(50, 450); 
        this.posY = obj.posY || random(50, 450);

        this.speed = obj.speed || 2; 
        
        // Only move up/down or left/right (no diagonal movement)
        let directions = [
            createVector(1, 0),  
            createVector(-1, 0), 
            createVector(0, 1),  
            createVector(0, -1)  
        ];
        this.direction = random(directions);

        this.color = color(random(255), random(255), random(255));
    }

    move() {
        this.posX += this.speed * this.direction.x;
        this.posY += this.speed * this.direction.y;

        if (this.posX <= 50) {
            this.direction.x = 1; 
        } 
        if (this.posX >= 450) {
            this.direction.x = -1; 
        } 
        
        if (this.posY <= 50) {
            this.direction.y = 1; 
        } 
        if (this.posY >= 450) {
            this.direction.y = -1; 
        } 
    }

    render() {
        push();
        translate(this.posX, this.posY);
        noStroke();
        
        fill(this.color);
        ellipse(0, 0, 15, 15);  

        pop();
    }
}

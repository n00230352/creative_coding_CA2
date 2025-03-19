class Ghost{
    constructor(){
        this.posX = random(0,300)
        this.posY = random(0,300)
    }

    render(){
        push()
        translate(this.posX, this.posY)
        
        noLoop();
        noStroke();
        fill(random(255), random(255), random(255));
        rect(100, 100, 25, 12.5); 
        ellipse(112.5, 100, 25, 25);  
        
        pop()
    }
}
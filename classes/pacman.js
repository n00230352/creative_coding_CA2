class Pacman{
    constructor(obj){
        this.posX = obj.posX || 100;
		this.posY = obj.posY || 100;
    }

    render(){
        push()
        translate (this.posX, this.posY)

        noStroke();
        fill(250, 222, 17);
        arc(150, 200, 50, 50, 225, 135); 

        pop()
    }
}
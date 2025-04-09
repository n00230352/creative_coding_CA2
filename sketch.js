let pacman;
let myArena;


function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);

    pacman = new Pacman({});
    myArena = new Arena({});

    
}

function draw(){
    background(52,52,52)
    myArena.renderArena();
    pacman.render();
    pacman.move(myArena);

    myArena.moveghosts();
    myArena.renderGhosts(); 
    myArena.checkCollisions(pacman);

    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Ghosts: " + myArena.ghostsEaten, 10, 10);
} 

function keyPressed() {
    if (key === 'W') { 
        pacman.increaseSpeed();
    } else if (key === 'S') { 
        pacman.reduceSpeed();
    }
}



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
} 



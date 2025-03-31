let pacman;
let myArena;
let ghosts = [];

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);

    pacman = new Pacman({});
    myArena = new Arena({});

    for (let i = 0; i < 5 ; i++) { 
        ghosts.push(new Ghost({})); 
    }
}

function draw(){
    background(52,52,52)
    myArena.renderArena();

    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].move();
        ghosts[i].render(); 
    }

} 



let pacman;
let ghosts = [];
let numGhosts = 12;

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);

    pacman = new Pacman({});

    for(let i = 0; i<numGhosts; i++){
        ghosts.push((new Ghost));
        }
}

function draw(){
    background(52,52,52)
    pacman.render();
    pacman.move();

    // for(let i = 0; i<numGhosts; i++){
    //     ghosts[i].render();
    //     }
} 



let pacman;

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);

    pacman = new Pacman({});
}

function draw(){
    background(52,52,52)
    pacman.render();
}

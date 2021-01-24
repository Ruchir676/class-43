var backgroundImage, goonImage, knightImage, motorcycle_img;



function preload() {
    backgroundImage = loadImage("images/background.png");
    goonImage = loadImage("images/goon.png");
    knightImage = loadImage("images/Knight.png");
    motorcycle_img = loadImage("images/motorcycle.png");

}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);

    background = createSprite(950,500,2000,10);
    background.addImage(backgroundImage);
    background.scale=2;
    background.velocityX=-5

}

function draw() {

    if(background.x<600) {
        background.x = background.width/2;
    }
    console.log(background.x);
    

    drawSprites();

}



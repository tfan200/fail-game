var player;
var obstacles;
var PlrImg; 
function preload()
{
    PlrImg = loadImage("Images/lol.png.png");
} 
function setup() {
    createCanvas(500, 500);
    player = createSprite(250,300,150,150);
    player.addImage(PlrImg);
    player.scale = 0.15


    function draw(){
        background("red");
        if(keyWentDown(UP_ARROW)){
            player.VelocityX = 0
            player.VelocityY = 5
        }
    }    
}

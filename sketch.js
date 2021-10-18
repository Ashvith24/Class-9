var ball
function setup() {
  createCanvas(1620,970);
  ball = createSprite(200, 200, 20, 20)
  ball.shapeColor = "green"
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyDown(RIGHT_ARROW)) {
    ball.x += 5
  }
  if(keyDown(LEFT_ARROW)) {
    ball.x += -5
  }
  if(keyDown(UP_ARROW)) {
    ball.y += -5
  }
  if(keyDown(DOWN_ARROW)) {
    ball.y += 5
  }

}





var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

bullet = createSprite(25,200,50,5);
bullet.shapeColor = "white";
bullet.velocityX = speed;

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);

// fixedRect = createSprite(400,100,50,80);
// fixedRect.shapeColor = "green";
//fixedRect.debug = true;

// movingRect = createSprite(400,800,80,30);
// movingRect.shapeColor = "green";
//movingRect.debug = true;

// gameObject1 = createSprite(100,100,50,50);
// gameObject1.shapeColor = "green";

// gameObject2 = createSprite(200,100,50,50);
// gameObject2.shapeColor = "green";

// gameObject3 = createSprite(300,100,50,50);
// gameObject3.shapeColor = "green";

// gameObject4 = createSprite(400,100,50,50);
// gameObject4.shapeColor = "green";

// movingRect.velocityY = -5;
// fixedRect.velocityY = 5;

}

function draw() {
  background(0,0,0);
  
if (hasCollided(bullet,wall)) {
 bullet.velocityX = 0;
 var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10) {
     wall.shapeColor = color(255,0,0);
  }
    if (damage < 10) {
     wall.shapeColor = color(0,255,0);
    }
}

 bullet.collide(wall);

  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if (isTouching(movingRect,gameObject4)) {

  //   movingRect.shapeColor = "blue";
  //   gameObject4.shapeColor = "blue";
  // } 
  // else {
  //   movingRect.shapeColor = "green";
  //   gameObject4.shapeColor = "green";
  // }
 
//  bounceOff(movingRect,fixedRect);

  drawSprites();
}

function hasCollided(LBullet,LWall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}
 
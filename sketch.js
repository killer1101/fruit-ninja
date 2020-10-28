var sword, fruits, monster, fruitG, monsterG, randomFruit, score;

var swordImage, monster1, monster2, monster3, fruit1, fruit2, fruit3, fruit4;

var gameOverImage, monsterImage, fruit1Image, fruit2Image, fruit3Image, fruit4Image, monster2Image, monster3Image;

var monster2Image, monster3Image, monster3;

var swordSound, gameoverSound;

var PLAY = 1;
var END = 0;
var gameState = 1;

var score = 0;

function preload() {
  monsterImage = loadImage("alien1.png");
  monster2Image = loadImage("alien2.png")
  monster3Image = loadAnimation("alien1.png", "alien2.png");

  swordImage = loadImage("sword.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png");
  gameoverSound = loadSound("gameover.mp3");
  swordSound = loadSound("knifeSwooshSound.mp3")
}

function setup() {
  createCanvas(600, 600);

  sword = createSprite(40, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 1;

  sword.setCollider("rectangle", 0, 0, 40, 40)

  gameOver = createSprite(300, 100);
  gameOver.addImage(gameOverImage);

  score = 0;
  fruitG = createGroup();
  monsterG = createGroup()
}

function draw() {
  background("lightblue");

  textSize(30);
  text("Score: " + score, 400, 50);

  if (gameState === PLAY) {
    gameOver.visible = false;
    sword.visible = true;
    Fruits();
    Monsters();
    Fruits2();
    Monsters2();

    sword.y = World.mouseY;
    sword.x = World.mouseX;

  }

  if (fruitG.isTouching(sword)) {
    fruitG.destroyEach()
    score = score + 2;
    swordSound.play();
  }


  if (monsterG.isTouching(sword)) {
    monsterG.destroyEach();
    gameoverSound.play();
    gameState = END;

  } else if (gameState === END) {
    gameOver.visible = true;
    gameOver.scale = 1.5;
    sword.visible = false;
    score = 0;
  }
if (mousePressedOver(gameOver)){
reset()
}

  drawSprites();
}

function reset(){
gameState = PLAY;
score = 0;


}

function Fruits() {
  if (frameCount % 50 === 0) {
    var fruit = createSprite(600, 150, 5, 10);
    fruit.velocityX = -10;
    fruit.y = Math.round(random(100, 400))

    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        fruit.addImage(fruit1Image);
        break;
      case 2:
        fruit.addImage(fruit2Image);
        break;
      case 3:
        fruit.addImage(fruit3Image);
        break;
      case 4:
        fruit.addImage(fruit4Image);
        break;
      default:
        break;
    }
    fruit.scale = 0.3;
    fruit.lifetime = 200;

    fruitG.add(fruit);
  }
}

function Fruits2() {
  if (frameCount % 50 === 0) {
    var fruit = createSprite(150, 600, 5, 10);
    fruit.velocityX = 10;
    fruit.y = Math.round(random(100, 400))

    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        fruit.addImage(fruit1Image);
        break;
      case 2:
        fruit.addImage(fruit2Image);
        break;
      case 3:
        fruit.addImage(fruit3Image);
        break;
      case 4:
        fruit.addImage(fruit4Image);
        break;
      default:
        break;
    }
    fruit.scale = 0.3;
    fruit.lifetime = 200;

    fruitG.add(fruit);
  }
}

function Monsters() {
  if (frameCount % 100 === 0) {
    var monster = createSprite(600, 150, 5, 10);
    monster.velocityX = -(10 + (score / 10));
    monster.y = Math.round(random(100, 300));

    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        monster.addImage(monsterImage);
        break;
      case 2:
        monster.addImage(monster2Image);
        break;
      case 3:
        monster.addAnimation("monster", monster3Image);
        break;
      default:
        break;
    }
    monsterG.add(monster);
  }
}

function Monsters2() {
  if (frameCount % 50 === 0) {
    var monster = createSprite(600, 150, 5, 10);
    monster.velocityX = -(10 + (score / 10));
    monster.y = Math.round(random(100, 300));

    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        monster.addImage(monsterImage);
        break;
      case 2:
        monster.addImage(monster2Image);
        break;
      case 3:
        monster.addAnimation("monster", monster3Image);
        break;
      default:
        break;
    }
    monsterG.add(monster);
  }
}
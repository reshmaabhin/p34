//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  this.image = loadImage("Dog.png");
  this.image = loadImage("happydog.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);
  dog = createSprite();
  dog.addImage("dog.png");
  foodStock = dataBase.ref('Food');
  foodStock.on("value",readStock);
  if(KeyWentDown(Up_Arrow)){
    writeStock(foodS);
    dog.addImage(happydog.png);
  }
}


function draw() {  

  drawSprites();
  //add styles here

}




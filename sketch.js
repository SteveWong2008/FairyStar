var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var starBody_options = {
		isStatic : false
	}
   
	starBody = Bodies.circle(650 , 30 , 5, starBody_options);
	World.add(world, starBody);
	console.log(starBody);

	

}


function draw() {
  background(bgImg);
  	Engine.update(engine);
  	
	fairyVoice.play();
	star.x = starBody.position.x;
	star.y = starBody.position.y;
	
	if(star.y > 450 && starBody.position.y > 450){
		Matter.Body.setStatic(starBody,true);
	}
	drawSprites();
  
}

function keyPressed() {
	//write code here
	if(keyCode === RIGHT_ARROW){
		fairy.x =fairy.x + 10;
	}

	if(keyCode === LEFT_ARROW){
		fairy.x =fairy.x - 10;
	}

	if(keyCode === DOWN_ARROW)[
		Matter.Body.setStatic(starBody,false)
	]
}

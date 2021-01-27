const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
function setup(){
  createCanvas(500,500)
  engine = Engine.create();
  world = engine.world;
  
  bob = new Box(100,200,70,70)
  b1 = new Box(300,450,50,50)
  b2 = new Box(300,400,50,50)
  b3 = new Box(300,350,50,50)
  b4 = new Box(300,300,50,50)
  b5 = new Box(300,250,50,50)
  b6 = new Box(300,200,50,50)
  b7 = new Box(300,150,50,50)

  b8 = new Box(350,450,50,50)
  b9 = new Box(350,400,50,50)
  b10 = new Box(350,350,50,50)
  b11 = new Box(350,300,50,50)
  b12 = new Box(350,250,50,50)
  b13 = new Box(350,200,50,50)
  b14 = new Box(350,150,50,50)

  b15 = new Box(400,450,50,50)
  b16 = new Box(400,400,50,50)
  b17 = new Box(400,350,50,50)
  b18 = new Box(400,300,50,50)
  b19 = new Box(400,250,50,50)
  b20 = new Box(400,200,50,50)
  b21 = new Box(400,150,50,50)
  
  ground = new Boundary(250,height,500,10)

  rope1 = new Chain(bob.body,{x:100,y:50})
  
}

function draw(){
  background("lavender")
  Engine.update(engine)

  // bob.show()
  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  b7.show();

  b8.show();
  b9.show();
  b10.show();
  b11.show();
  b12.show();
  b13.show();
  b14.show();

  b15.show();
  b16.show();
  b17.show();
  b18.show();
  b19.show();
  b20.show();
  b21.show();


  ellipse(bob.body.position.x,bob.body.position.y,70)
  
  ground.show();

  rope1.display()
}

function mouseDragged(){
 Matter.Body.setPosition(bob.body, {x:mouseX,y:mouseY})
}





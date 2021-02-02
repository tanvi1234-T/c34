const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(600,790,1200,20);
    

    
    box2 = new Box(700,320,70,70);
    box3= new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(700,320,70,70);
    box7 = new Box(700,320,70,70);
    box8 = new Box(700,320,70,70);
    box9 = new Box(700,320,70,70);
    box10 = new Box(700,320,70,70);

    box11 = new Box(900,320,70,70);
    box12= new Box(900,320,70,70);
    box13 = new Box(900,320,70,70);
    box14 = new Box(900,320,70,70);
    box15 = new Box(900,320,70,70);
    box16= new Box(900,320,70,70);
    box17 = new Box(900,320,70,70);
    box18 = new Box(900,320,70,70);
    box19 = new Box(900,320,70,70);

    
    
    ball1 = new Ball(200,100,80,80);

    ropesling1 = new ropesling(ball1.body,{x:450, y:80});



   
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
 
    background("cyan");
    Engine.update(engine);
   
  
    box2.display(); 
    box3.display(); 
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();


    ball1.display();

    ropesling1.display();
    
  //  slingshot.display();    
}

// function mouseDragged(){
//     if (gameState!=="launched"){
//         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//     }
// }


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }


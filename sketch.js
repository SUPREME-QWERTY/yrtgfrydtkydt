var SPACE,BACK,SPACE2,BACK2;

var UFO,RETRO;

var PROTON_RIGHT,PROTON_LEFT,PROTON_BLAST;

var TORUS,TORUS_BLAST;

var PIXEL,PIXEL_LASER;

var SUPER_P,SUPER_PROTON;

var SPIKE,BLAST_MOON_SPIKE;

var CELL,SOLAR_CELL;

var GLOOM,RADIO_GLOOM;

var grey_UFO,grey_UFO2,ENEMY_GREY_UFO;

var backSound;

function preload() {
  
  SPACE=loadAnimation("SPACE.png");

  SPACE2=loadAnimation("SPACE2.png");

  RETROred=loadAnimation("RED_UFO.png");

  RETROblue=loadAnimation("BLUE_UFO.png");

  RETROpink=loadAnimation("PINK_UFO.png");

  RETROlime=loadAnimation("LIME_UFO.png");

  RETROcyan=loadAnimation("CYAN_UFO.png");

  RETROblue=loadAnimation("BLUE_UFO.png");

  RETROgreen=loadAnimation("GREEN_UFO.png");

  RETROwhite=loadAnimation("WHITE_UFO.png");

  RETROyellow=loadAnimation("YELLOW_UFO.png");

  RETROpurple=loadAnimation("PURPLE_UFO.png");

  RETROorange=loadAnimation("ORANGE_UFO.png");

  SOLAR_CELL=loadAnimation("SOLAR_CELL.png");

  RADIO_GLOOM=loadAnimation("RADIO_GLOOM.png");

  PROTON_BLAST=loadAnimation("PROTON_BLAST.png");

  SUPER_PROTON=loadAnimation("SUPER_PROTON.png");

  ENEMY_GREY_UFO=loadAnimation("ENEMY_GREY_UFO1.png","ENEMY_GREY_UFO1.png","ENEMY_GREY_UFO1.png","ENEMY_GREY_UFO2.png","ENEMY_GREY_UFO2.png","ENEMY_GREY_UFO2.png");

  ENEMY_SILVER_UFO=loadAnimation("ENEMY_SILVER_UFO1.png","ENEMY_SILVER_UFO1.png","ENEMY_SILVER_UFO1.png","ENEMY_SILVER_UFO2.png","ENEMY_SILVER_UFO2.png","ENEMY_SILVER_UFO2.png");

  backSound=loadSound("music_leonell_cassio_a_magical_journey_through_space.mp3");

  BLAST_MOON_SPIKE=loadAnimation("BLAST-MOON-SPIKE1.png","BLAST-MOON-SPIKE2.jpg","BLAST-MOON-SPIKE3.jpg","BLAST-MOON-SPIKE4.jpg","BLAST-MOON-SPIKE5.jpg","BLAST-MOON-SPIKE6.jpg","BLAST-MOON-SPIKE7.jpg","BLAST-MOON-SPIKE8.jpg","BLAST-MOON-SPIKE9.jpg","BLAST-MOON-SPIKE10.jpg","BLAST-MOON-SPIKE11.jpg","BLAST-MOON-SPIKE12.jpg","BLAST-MOON-SPIKE13.jpg");
  
  END_STAGE_UFO=loadAnimation("OVER_UFO.jpg","OVER1.jpg","OVER2.jpg","OVER3.jpg","OVER4.jpg","OVER5.jpg","OVER6.jpg","OVER7.jpg","OVER8.jpg","OVER9.jpg","OVER10.jpg","OVER11.jpg","OVER12.jpg","OVER13.jpg","OVER14.jpg","OVER15.jpg","OVER16.jpg","OVER17.jpg","OVER18.jpg","OVER19.jpg","OVER20.jpg","OVER21.jpg","OVER22.jpg","OVER23.jpg","OVER24.jpg","OVER25.jpg","OVER26.jpg","OVER27.jpg","OVER28.jpg","OVER28.jpg","OVER29.jpg","OVER30.jpg","OVER31.jpg","OVER32.jpg","OVER33.jpg","OVER34.jpg","OVER35.jpg","OVER36.jpg","OVER37.jpg","OVER38.jpg","OVER39.jpg","OVER40.jpg","OVER41.jpg","OVER42.jpg","OVER43.jpg","OVER44.jpg","OVER45.jpg","OVER46.jpg","OVER47.jpg");
  
}
function setup() {
  
  createCanvas(1280,648);

  grey_UFO_grp = new Group();

  grey_UFO_grp2 = new Group();

  silver_UFO_grp = new Group();

  silver_UFO_grp2 = new Group();

  spike_grp = new Group();

  spike_grp2 = new Group();

  cell_grp = new Group();

  cell_grp2 = new Group();

  gloom_grp = new Group();

  gloom_grp2 = new Group();

  BACK = createSprite(2600,300);
  BACK.addAnimation(" ",SPACE);
  BACK.scale = 1;
  BACK.velocityX = -0.1;

  BACK2 = createSprite(2600,300);
  BACK2.addAnimation(" ",SPACE2);
  BACK2.scale = 1;
  BACK2.velocityX = 0.1;

  SUPER_P = createSprite(300,300);
  SUPER_P.addAnimation(" ",SUPER_PROTON);
  SUPER_P.scale = 0.3;
  //SUPER_P.rotationSpeed = 999;

  PROTON_RIGHT = createSprite(640,307.95);
  PROTON_RIGHT.addAnimation(" ",PROTON_BLAST);
  PROTON_RIGHT.scale = 0.06;
  PROTON_RIGHT.rotationSpeed = 160;

  PROTON_LEFT = createSprite(640,307.95);
  PROTON_LEFT.addAnimation(" ",PROTON_BLAST);
  PROTON_LEFT.scale = 0.06;
  PROTON_LEFT.rotationSpeed = -160;

  UFO = createSprite(640,307.95);
  UFO.addAnimation(" ",RETROred);
  UFO.rotationSpeed = 0.1;
  UFO.scale = 0.13;

}
  
function draw() {

  background("black");

  if(PROTON_RIGHT.isTouching(grey_UFO_grp)||PROTON_LEFT.isTouching(grey_UFO_grp))
    {
    grey_UFO_grp.destroyEach();
    }
  if(PROTON_RIGHT.isTouching(grey_UFO_grp2)||PROTON_LEFT.isTouching(grey_UFO_grp2))
    {
      grey_UFO_grp2.destroyEach();
    }
    if(PROTON_RIGHT.isTouching(silver_UFO_grp)||PROTON_LEFT.isTouching(silver_UFO_grp2))
    {
      silver_UFO_grp.destroyEach();
    }
    if(PROTON_RIGHT.isTouching(silver_UFO_grp2)||PROTON_LEFT.isTouching(silver_UFO_grp2))
    {
      silver_UFO_grp2.destroyEach();
    }

  if(PROTON_RIGHT.isTouching(cell_grp)||PROTON_LEFT.isTouching(cell_grp))
    {
      cell_grp.destroyEach();
    }
  if(PROTON_RIGHT.isTouching(cell_grp2)||PROTON_LEFT.isTouching(cell_grp2))
    {
        cell_grp2.destroyEach();
    }

  if(PROTON_RIGHT.isTouching(gloom_grp)||PROTON_LEFT.isTouching(gloom_grp))
    {
      gloom_grp.destroyEach();
    }
  if(PROTON_RIGHT.isTouching(gloom_grp2)||PROTON_LEFT.isTouching(gloom_grp2))
    {
      gloom_grp2.destroyEach();
    }

  //backSound.play();

  if(keyWentDown(32))
 {

  PROTON_RIGHT.velocityX = 20;
  PROTON_LEFT.velocityX = -20;

 }

 if(PROTON_RIGHT.x > 1280)
 {
  PROTON_RIGHT.velocityX = 0;

  PROTON_RIGHT.x = UFO.x;
  PROTON_RIGHT.y = UFO.y;

 }else if(PROTON_LEFT.x < 0)
 {
  PROTON_LEFT.velocityX = 0;

  PROTON_LEFT.x = UFO.x;
  PROTON_LEFT.y = UFO.y;
 }

 if(PROTON_RIGHT.x === 640)
  {

   PROTON_RIGHT.y = UFO.y;

  }
  
  if(PROTON_LEFT.x === 640)
   {

   PROTON_LEFT.y = UFO.y;
    
  }


 if(keyDown(UP_ARROW))
 {

 UFO.y = UFO.y - 10;

 }
 if(keyDown(DOWN_ARROW))
 {

 UFO.y = UFO.y + 10;

 }

  var rand = Math.round(random(1,10));

 if(frameCount % 20 === 0)
 {

 if(rand === 1)
 {

  ENEMY_GREY();
 
 }else if(rand === 2)
 {

  ENEMY_SILVER();

 }else if(rand === 3)
 {

  ENEMY_SPIKE();

 }else if(rand === 4)
 {

  ENEMY_CELL();

 }else if(rand === 5)
 {

  ENEMY_GLOOM();

 }else if(rand === 6)
 {

  ENEMY_GREY2();

 }else if(rand === 7)
 {

  ENEMY_SILVER2();

 }else if(rand === 8)
 {

  ENEMY_SPIKE2();

 }else if(rand === 9)
 {

  ENEMY_CELL2();

 }else if(rand === 10)
 {

  ENEMY_GLOOM2();

 }

 }

  drawSprites();
  
 }

function ENEMY_GREY() {

   grey_UFO = createSprite(1300,Math.round(random(20,600)));
   grey_UFO.addAnimation(" ",ENEMY_GREY_UFO);
   grey_UFO.velocityX = -10;
   grey_UFO.scale = 0.1;
   //l
   grey_UFO_grp.add(grey_UFO);

 }

function ENEMY_GREY2() {

   grey_UFO2 = createSprite(0,Math.round(random(20,600)));
   grey_UFO2.addAnimation(" ",ENEMY_GREY_UFO);
   grey_UFO2.velocityX = 10;
   grey_UFO2.scale = 0.1;
   //r
   grey_UFO_grp2.add(grey_UFO2);
  
 }

function ENEMY_SILVER() {

  silver_UFO = createSprite(1300,Math.round(random(20,600)));
  silver_UFO.addAnimation(" ",ENEMY_SILVER_UFO);
  silver_UFO.velocityX = -1;
  silver_UFO.scale = 0.1;
  //l
  silver_UFO_grp.add(silver_UFO);

}

function ENEMY_SILVER2() {

  silver_UFO2 = createSprite(0,Math.round(random(20,600)));
  silver_UFO2.addAnimation(" ",ENEMY_SILVER_UFO);
  silver_UFO2.velocityX = 1;
  silver_UFO2.scale = 0.1;
  //r
  silver_UFO_grp2.add(silver_UFO2);
  
}

function ENEMY_SPIKE() {

  SPIKE = createSprite(1300,Math.round(random(20,600)));
  SPIKE.addAnimation(" ",BLAST_MOON_SPIKE);
  SPIKE.velocityX = -13;
  SPIKE.scale = 0.05;
  SPIKE.rotationSpeed = 10;

  spike_grp.add(SPIKE);

}

function ENEMY_SPIKE2() {

  SPIKE2 = createSprite(0,Math.round(random(20,600)));
  SPIKE2.addAnimation(" ",BLAST_MOON_SPIKE);
  SPIKE2.velocityX = 10;
  SPIKE2.scale = 0.05;
  SPIKE2.rotationSpeed = -10

  spike_grp2.add(SPIKE2);

}

function ENEMY_CELL() {

  CELL = createSprite(1300,Math.round(random(20,600)));
  CELL.addAnimation(" ",SOLAR_CELL);
  CELL.velocityX = -10;
  CELL.scale = 0.06;
  CELL.rotationSpeed = 10;

  cell_grp.add(CELL);

}

function ENEMY_CELL2() {

  CELL2 = createSprite(0,Math.round(random(20,600)));
  CELL2.addAnimation(" ",SOLAR_CELL);
  CELL2.velocityX = 10;
  CELL2.scale = 0.06;
  CELL2.rotationSpeed = -10;

  cell_grp2.add(CELL2);

}

function ENEMY_GLOOM() {

  GLOOM = createSprite(0,Math.round(random(20,600)));
  GLOOM.addAnimation(" ",RADIO_GLOOM);
  GLOOM.velocityX = 10;
  GLOOM.scale = 0.06;
  GLOOM.rotationSpeed = 10;
  //0.06

  gloom_grp.add(GLOOM);
  
}

function ENEMY_GLOOM2() {

  GLOOM2 = createSprite(0,Math.round(random(20,600)));
  GLOOM2.addAnimation(" ",RADIO_GLOOM);
  GLOOM2.velocityX = -10;
  GLOOM2.scale = 0.06;
  GLOOM2.rotationSpeed = -10;

  gloom_grp2.add(GLOOM2);
  if(PROTON_RIGHT.isTouching(gloom_grp2))
  {

   gloom_grp2.destroyEach();

  }
  

}
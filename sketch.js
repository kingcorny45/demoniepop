
var player,player_image;
var player_stand,player_walk
var lime_thing,lime_image;
var button
var floors
var player1_where,player1_whereIn
var newX,newY;

var gameState = "start";
var battleMusic;


function preload(){
lime_image = loadImage("images/Lime.jpeg");

player_stand = loadAnimation("test_dummy/stand_1.png","test_dummy/stand_2.png");
//player_stand = loadAnimation("./test_dummy/stand1.png","./test_dummy/stand2.png");
//player_stand = loadAnimation("./test_dummy/trollge.png","./test_dummy/troll.png");

battlemusic = loadSound("music/JECXZ_start.mp3")

}
function setup(){
  
  createCanvas(windowWidth,windowHeight) 
  //battlemusic.play()
  battlemusic.setVolume(0.5)
  floors = new Group();
  //console.log(657.75/6) //floor 109.625 /height of everybox
  //console.log(windowWidth/109.625)
  //console.log(109.625*7/6)
  button = createSprite(width-200, height - 20,50,20);
  button.shapeColor = "white"
  //button.position(windowWidth-150,windowHeight-50)
  
  //1st lane

  floor1=createSprite(63.948,windowHeight/4+1+109.625/2,127.896,109.625); //A1
  
  floor2=createSprite(192.948,windowHeight/4+1+109.625/2,127.896,109.625); //B1
  floor3=createSprite(321.948,windowHeight/4+1+109.625/2,127.896,109.625); //C1
  floor4=createSprite(450.948,windowHeight/4+1+109.625/2,127.896,109.625); //D1
  floor5=createSprite(579.948,windowHeight/4+1+109.625/2,127.896,109.625); //E1
  floor6=createSprite(708.948,windowHeight/4+1+109.625/2,127.896,109.625); //F1
  floor7=createSprite(837.948,windowHeight/4+1+109.625/2,127.896,109.625); //G1
  floor8=createSprite(966.948,windowHeight/4+1+109.625/2,127.896,109.625); //H1
  floor9=createSprite(1095.948,windowHeight/4+1+109.625/2,127.896,109.625) //I1
  floor10=createSprite(1224.948,windowHeight/4+1+109.625/2,127.896,109.625) //J1
  floor11=createSprite(1353.948,windowHeight/4+1+109.625/2,127.896,109.625) //K1
  floor12=createSprite(1482.948,windowHeight/4+1+109.625/2,127.896,109.625) //L1
  floor13=createSprite(1611.948,windowHeight/4+1+109.625/2,127.896,109.625) //M1
  floor14=createSprite(1740.948,windowHeight/4+1+109.625/2,127.896,109.625) //N1
  floor15=createSprite(1869.948,windowHeight/4+1+109.625/2,127.896,109.625) //O1
  
  //2nd lane
  floor16=createSprite(63.948,windowHeight/3+26+109.625/2,127.896,109.625); //A2
  floor17=createSprite(192.948,windowHeight/3+26+109.625/2,127.896,109.625);//B2
  floor18=createSprite(321.948,windowHeight/3+26+109.625/2,127.896,109.625);//C2
  floor19=createSprite(450.948,windowHeight/3+26+109.625/2,127.896,109.625);//D2
  floor20=createSprite(579.948,windowHeight/3+26+109.625/2,127.896,109.625);//E2
  floor21=createSprite(708.948,windowHeight/3+26+109.625/2,127.896,109.625);//F2
  floor22=createSprite(837.948,windowHeight/3+26+109.625/2,127.896,109.625);//G2
  floor23=createSprite(966.948,windowHeight/3+26+109.625/2,127.896,109.625);//H2
  floor24=createSprite(1095.948,windowHeight/3+26+109.625/2,127.896,109.625);//I2
  floor25=createSprite(1224.948,windowHeight/3+26+109.625/2,127.896,109.625);//J2
  floor26=createSprite(1353.948,windowHeight/3+26+109.625/2,127.896,109.625);//K2
  floor27=createSprite(1482.948,windowHeight/3+26+109.625/2,127.896,109.625);//L2
  floor28=createSprite(1611.948,windowHeight/3+26+109.625/2,127.896,109.625);//M2
  floor29=createSprite(1740.948,windowHeight/3+26+109.625/2,127.896,109.625);//N2
  floor30=createSprite(1869.948,windowHeight/3+26+109.625/2,127.896,109.625);//O2

  //3rd lane
  floor31=createSprite(63.948,windowHeight/2+(-1)+109.625/3,127.896,109.625); //A3
  floor32=createSprite(192.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//B3
  floor33=createSprite(321.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//C3
  floor34=createSprite(450.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//D3
  floor35=createSprite(579.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//E3
  floor36=createSprite(708.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//F3
  floor37=createSprite(837.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//G3
  floor38=createSprite(966.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//H3
  floor39=createSprite(1095.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//I3
  floor40=createSprite(1224.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//J3
  floor41=createSprite(1353.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//K3
  floor42=createSprite(1482.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//L3
  floor43=createSprite(1611.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//M3
  floor44=createSprite(1740.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//N3
  floor45=createSprite(1869.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//O3
  //4th lane
  floor46=createSprite(63.948,windowHeight/2+(92)+109.625/2,127.896,109.625); //A4
  floor47=createSprite(192.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//B4
  floor48=createSprite(321.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//C4
  floor49=createSprite(450.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//D4
  floor50=createSprite(579.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//E4
  floor51=createSprite(708.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//F4
  floor52=createSprite(837.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//G4
  floor53=createSprite(966.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//H4
  floor54=createSprite(1095.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//I4
  floor55=createSprite(1224.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//J4
  floor56=createSprite(1353.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//K4
  floor57=createSprite(1482.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//L4
  floor58=createSprite(1611.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//M4
  floor59=createSprite(1740.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//N4
  floor60=createSprite(1869.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//O4
  
  //5th lane
  floor61=createSprite(63.948,windowHeight/2+(204)+109.625/2,127.896,109.625); //A5
  floor62=createSprite(192.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//B5
  floor63=createSprite(321.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//C5
  floor64=createSprite(450.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//D5
  floor65=createSprite(579.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//E5
  floor66=createSprite(708.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//F5
  floor67=createSprite(837.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//G5
  floor68=createSprite(966.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//H5
  floor69=createSprite(1095.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//I5
  floor70=createSprite(1224.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//J5
  floor71=createSprite(1353.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//K5
  floor72=createSprite(1482.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//L5
  floor73=createSprite(1611.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//M5
  floor74=createSprite(1740.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//N5
  floor75=createSprite(1869.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//O5

  //6th lane
  floor76=createSprite(63.948,windowHeight/2+(316)+109.625/2,127.896,109.625); //A5
  floor77=createSprite(192.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//B5
  floor78=createSprite(321.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//C5
  floor79=createSprite(450.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//D5
  floor80=createSprite(579.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//E5
  floor81=createSprite(708.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//F5
  floor82=createSprite(837.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//G5
  floor83=createSprite(966.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//H5
  floor84=createSprite(1095.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//I5
  floor85=createSprite(1224.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//J5
  floor86=createSprite(1353.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//K5
  floor87=createSprite(1482.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//L5
  floor88=createSprite(1611.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//M5
  floor89=createSprite(1740.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//N5
  floor90=createSprite(1869.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//O5

  floors.add(floor1);
  floors.add(floor2);
  floors.add(floor3);
  floors.add(floor4);
  floors.add(floor5);
  floors.add(floor6);
  floors.add(floor7);
  floors.add(floor8);
  floors.add(floor9);
  floors.add(floor10);

  floors.add(floor11);
  floors.add(floor12);
  floors.add(floor13);
  floors.add(floor14);
  floors.add(floor15);
  floors.add(floor16);
  floors.add(floor17);
  floors.add(floor18);
  floors.add(floor19);
  floors.add(floor20);

  floors.add(floor21);
  floors.add(floor22);
  floors.add(floor23);
  floors.add(floor24);
  floors.add(floor25);
  floors.add(floor26);
  floors.add(floor27);
  floors.add(floor28);
  floors.add(floor29);
  floors.add(floor30);

  floors.add(floor31);
  floors.add(floor32);
  floors.add(floor33);
  floors.add(floor34);
  floors.add(floor35);
  floors.add(floor36);
  floors.add(floor37);
  floors.add(floor38);
  floors.add(floor39);
  floors.add(floor40);

  floors.add(floor41);
  floors.add(floor42);
  floors.add(floor43);
  floors.add(floor44);
  floors.add(floor45);
  floors.add(floor46);
  floors.add(floor47);
  floors.add(floor48);
  floors.add(floor49);
  floors.add(floor50);

  floors.add(floor51);
  floors.add(floor52);
  floors.add(floor53);
  floors.add(floor54);
  floors.add(floor55);
  floors.add(floor56);
  floors.add(floor57);
  floors.add(floor58);
  floors.add(floor59);
  floors.add(floor60);

  floors.add(floor61);
  floors.add(floor62);
  floors.add(floor63);
  floors.add(floor64);
  floors.add(floor65);
  floors.add(floor66);
  floors.add(floor67);
  floors.add(floor68);
  floors.add(floor69);
  floors.add(floor70);

  floors.add(floor71);
  floors.add(floor72);
  floors.add(floor73);
  floors.add(floor74);
  floors.add(floor75);
  floors.add(floor76);
  floors.add(floor77);
  floors.add(floor78);
  floors.add(floor79);
  floors.add(floor80);

  floors.add(floor81);
  floors.add(floor82);
  floors.add(floor83);
  floors.add(floor84);
  floors.add(floor85);
  floors.add(floor86);
  floors.add(floor87);
  floors.add(floor88);
  floors.add(floor89);
  floors.add(floor90);
  player1_where = createSprite(floor50.x,floor50.y,50,50)
  player1_where.shapeColor = "red"
  player1_where.visible=false
  player1_whereIn = createSprite(player1_where.x,player1_where.y,10,10)
  player1_whereIn.shapeColor = "maroon"
  player1_whereIn.visible=false
  player = createSprite(player1_where.x,player1_where.y,50,50);
  //player = createSprite(floor36.x,floor36.y,floor36.width,floor36.height)
  
  player.scale = 0.5
  //player_stand.frameDelay=20
  player.addAnimation("stand",player_stand)
  //frameRate(5);
  //player_stand.frameDelay=20;
  
}

function draw(){
  
  background("black")
  player1_whereIn.position.x = player1_where.x
  player1_whereIn.position.y = player1_where.y
  text(mouseX+","+mouseY,10,10)
  stroke("lime")
  
  lime()
  line(0,windowHeight/4,windowWidth,windowHeight/4) //y=242.25
  line(0,912,windowWidth,912)
 //a total of   squares ps distance = 129
 
  if(gameState === "start"){
    floor1.visible  = false;
  
    floor2.visible = false;
    floor3.visible = false;
    floor4.visible = false;
    floor5.visible = false;
    floor6.visible = false;
    floor7.visible = false;
    floor8.visible = false;
    floor9.visible = false;
    floor10.visible = false;

    floor11.visible = false;
    floor12.visible = false;
    floor13.visible = false;
    floor14.visible = false
    floor15.visible = false;
    floor16.visible = false;
    floor17.visible = false;
    floor18.visible = false;
    floor19.visible = false;
    floor20.visible = false;

    floor21.visible = false;
    floor22.visible = false;
    floor23.visible = false;
    floor24.visible = false;
    floor25.visible = false;
    floor26.visible = false;
    floor27.visible = false;
    floor28.visible = false;
    floor29.visible = false;
    floor30.visible = false;

    floor31.visible = false;
    floor32.visible = false;
    floor33.visible = false;
    floor34.visible = false;
    floor35.visible = false;
    floor36.visible = false;
    floor37.visible = false;
    floor38.visible = false;
    floor39.visible = false;
    floor40.visible = false;

    floor41.visible = false;
    floor42.visible = false;
    floor43.visible = false;
    floor44.visible = false;
    floor45.visible = false;
    floor46.visible = false;
    floor47.visible = false;
    floor48.visible = false;
    floor49.visible = false;
    floor50.visible = false;

    floor51.visible = false;
    floor52.visible = false;
    floor53.visible = false;
    floor54.visible = false;
    floor55.visible = false;
    floor56.visible = false;
    floor57.visible = false;
    floor58.visible = false;
    floor59.visible = false;
    floor60.visible = false;

    floor61.visible = false;
    floor62.visible = false;
    floor63.visible = false;
    floor64.visible = false;
    floor65.visible = false;
    floor66.visible = false;
    floor67.visible = false;
    floor68.visible = false;
    floor69.visible = false;
    floor70.visible = false;

    floor71.visible = false;
    floor72.visible = false;
    floor73.visible = false;
    floor74.visible = false;
    floor75.visible = false;
    floor76.visible = false;
    floor77.visible = false;
    floor78.visible = false;
    floor79.visible = false;
    floor80.visible = false;

    floor81.visible = false;
    floor82.visible = false;
    floor83.visible = false;
    floor84.visible = false;
    floor85.visible = false;
    floor86.visible = false;
    floor87.visible = false;
    floor88.visible = false;
    floor89.visible = false;
    floor90.visible = false;

    if(mousePressedOver(button)){
      gameState = "move";
      
      
     
    }
    
  }
  else if(gameState === "move"){
    
    floor1.visible  = true;
  
    floor2.visible = true;
    floor3.visible = true;
    floor4.visible = true;
    floor5.visible = true;
    floor6.visible = true;
    floor7.visible = true;
    floor8.visible = true;
    floor9.visible = true;
    floor10.visible = true;

    floor11.visible = true;
    floor12.visible = true;
    floor13.visible = true;
    floor14.visible = true
    floor15.visible = true;
    floor16.visible = true;
    floor17.visible = true;
    floor18.visible = true;
    floor19.visible = true;
    floor20.visible = true;

    floor21.visible = true;
    floor22.visible = true;
    floor23.visible = true;
    floor24.visible = true;
    floor25.visible = true;
    floor26.visible = true;
    floor27.visible = true;
    floor28.visible = true;
    floor29.visible = true;
    floor30.visible = true;

    floor31.visible = true;
    floor32.visible = true;
    floor33.visible = true;
    floor34.visible = true;
    floor35.visible = true;
    floor36.visible = true;
    floor37.visible = true;
    floor38.visible = true;
    floor39.visible = true;
    floor40.visible = true;

    floor41.visible = true;
    floor42.visible = true;
    floor43.visible = true;
    floor44.visible = true;
    floor45.visible = true;
    floor46.visible = true;
    floor47.visible = true;
    floor48.visible = true;
    floor49.visible = true;
    floor50.visible = true;

    floor51.visible = true;
    floor52.visible = true;
    floor53.visible = true;
    floor54.visible = true;
    floor55.visible = true;
    floor56.visible = true;
    floor57.visible = true;
    floor58.visible = true;
    floor59.visible = true;
    floor60.visible = true;

    floor61.visible = true;
    floor62.visible = true;
    floor63.visible = true;
    floor64.visible = true;
    floor65.visible = true;
    floor66.visible = true;
    floor67.visible = true;
    floor68.visible = true;
    floor69.visible = true;
    floor70.visible = true;

    floor71.visible = true;
    floor72.visible = true;
    floor73.visible = true;
    floor74.visible = true;
    floor75.visible = true;
    floor76.visible = true;
    floor77.visible = true;
    floor78.visible = true;
    floor79.visible = true;
    floor80.visible = true;

    floor81.visible = true;
    floor82.visible = true;
    floor83.visible = true;
    floor84.visible = true;
    floor85.visible = true;
    floor86.visible = true;
    floor87.visible = true;
    floor88.visible = true;
    floor89.visible = true;
    floor90.visible = true;
    for(var i=0;i<floors.length;i++){
      player.depth=floors[i].depth+1
      
      if(mousePressedOver(floors[i])){
        //count = 1;
       // floors[i].shapeColor = "green"
        if(floors[i].shapeColor === "green" && mousePressedOver(floors[i]) && 
        player.velocityX ===0 && player.velocityY ===0){
          player1_where.x = floors[i].x
          player1_where.y = floors[i].y
          newX = player1_where.x
          newY = player1_where.y
          //if(player.x !== newX && player.y !==newY){
           // text("this move is not allowed")
          //}
            //player.y = floors[i].y;
          }
        
        
      }
  
      if (mouseIsOver(floors[i])) {
        //floors[i].visible = false;
        floors[i].shapeColor = "green";
      } else {
       // floors[i].visible = true;
        floors[i].shapeColor = "grey";
        
      }
    }
    //up right
    if(player.isTouching(player1_whereIn)){
      player.velocityX=0
      
    }
    if(player.isTouching(player1_whereIn)/*&&player.y===player1_whereIn.y*/){
      player.velocityY=0 
    }
    if(player1_where.x-10> player.x){
      player.velocityX = 5
    }
    if(player1_where.y+10 < player.y  /*!player.isTouching(player1_where)*/ ){
      
      player.velocityY = -5
    }
    //down left
    if(player1_where.x+10< player.x/*!player.isTouching(player1_where)*/){
      
        
    
      
      player.velocityX = -5
      
    }
    
    if(player1_where.y-10>player.y){
      player.velocityY = 5
    }
    
    
    
  }


  
  

  drawSprites()
 
}
function lime(){
  if(frameCount%20===0){
  lime_thing = createSprite(1919,(random(0,212)),100,2)
  lime_thing.addImage(lime_image)
  
  lime_thing.scale = 0.5
  lime_thing.velocityX = -11
  lime_thing.lifetime = 200;
  
  }
  
}

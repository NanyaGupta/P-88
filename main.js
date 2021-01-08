var canvas= new fabric.Canvas("myCanvas");

var playerX=10;
var playerY=10;

var blockImageHeight=30;
var blockImageWidth=30;

var playerObject="";
var blockImageObject="";

function playerUpload(){
    fabric.Image.fromURL("player.png",function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeigh(140);
    playerObject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(playerObject);

});
}

function newImage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImageObject);

});
}

window.addEventListener("keydown",myKeyDown)

function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
  
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("p and shift key pressed together");
        blockImageHeight=blockImageHeight+10;
        blockImageWidth=blockImageWidth+10;
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
  
    }
  
    if(e.shiftKey==true && keyPressed=="77"){
      console.log("m and shift key pressed together");
      blockImageHeight=blockImageHeight-10;
      blockImageWidth=blockImageWidth-10;
      document.getElementById("currentWidth").innerHTML=blockImageWidth;
      document.getElementById("currentHeight").innerHTML=blockImageHeight;
  
  }
  if(keyPressed=="38"){
      up();
      console.log("up");
  }
  if(keyPressed=="40"){
      down();
      console.log("down");
  }
  if(keyPressed=="37"){
      left();
      console.log("left");
  }
  if(keyPressed=="39"){
      right();
      console.log("right");
}
if(keyPressed=="70"){
    newImage("ironman_face.png");
    console.log("f");
}
if(keyPressed=="66"){
    newImage("spiderman_body.png");
    console.log("b");
}
if(keyPressed=="76"){
    newImage("hulk_legs.png");
    console.log("l");
}
if(keyPressed=="72"){
    newImage("captain_america_left_hand.png");
    console.log("h");
}
if(keyPressed=="82"){
    newImage("thor_right_hand.png");
    console.log("r");
}
}

function up(){
    if(playerY>=5){
        playerY=playerY-blockImageHeight;
        console.log("block image height= "+ blockImageHeight);
        console.log("When up arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        canvas.remove(playerObject);
        playerUpload();
    }
}

function down(){
    if(playerY<=500){
        playerY=playerY+blockImageHeight;
        console.log("block image height= "+ blockImageHeight);
        console.log("When down arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        canvas.remove(playerObject);
        playerUpload();
    }
}

function left(){
    if(playerX>=5){
        playerX=playerX-blockImageWidth;
        console.log("block image Width= "+ blockImageWidth);
        console.log("When left arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        canvas.remove(playerObject);
        playerUpload();
    }
}

function right(){
    if(playerX<=900){
        playerX=playerX+blockImageWidth;
        console.log("block image Width= "+ blockImageWidth);
        console.log("When right arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        canvas.remove(playerObject);
        playerUpload();
    }
}


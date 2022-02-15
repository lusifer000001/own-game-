var car1Img ,car2Img ;
var car1, car2 ;
//var ghost 
var room1Img ,room2Img ,room3Img ;
var room1,room2,room3;
var connect4Img , connect4;
var gameTitleImg,gameTitle ;
var obstacle1, obstacle2 ;
var obstacle1Img ,obstacle2Img;
var player1 , player2 ;
var player1Img,player2Img ;
var gameState ;
var database ;
var form, players, playerCount;
var player ;
var allPlayers ;
var resetButtonImg ;
var system,code,security ;
var creepySound ;
var backgroundImg ;
var quizButton ;
var score = 0 ;





function preload() {

   car1Img = loadImage("assets/car1.png") ;
   car2Img = loadImage("assets/car2.png") ;
   room1Img = loadImage("assets/room1.png") ;
   room2Img = loadImage("assets/room2.jpg") ;
   room3Img = loadImage("assets/room3.jpg") ;
   connect4Img = loadImage("assets/connect4b.jpg") ;
   gameTitleImg = loadImage("assets/gametitle.jpg") ;
   player1Img = loadImage("assets/player1.png") ;
   player2Img = loadImage("assets/player2.png") ;
  resetButtonImg = loadImage("assets/resetButton.png")
   obstacle1Img = loadImage("assets/obstacle1.png") ;
   obstacle2Img = loadImage("assets/obstacle2.png") ;
  creepySound = loadSound("assets/creepySound.mp3") ;
  backgroundImg = loadImage("assets/backGround.jpg") ;
  quizButton = loadImage("assets/offButton.png") ;

}

function setup() {
 
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
    game = new Game();
    game.start() ;
    game.getState() ;
    
  
    

 
  
}

function draw() {
  background(gameTitleImg);
  if (playerCount === 2) {
    game.update(1);
   

}

  if (gameState === 1) {
    game.play();
    //creepySound.play() ;
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

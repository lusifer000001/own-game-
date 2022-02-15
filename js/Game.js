class Game {
  constructor(){

    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.quizGame = createElement("h2") ;
    this.quizButton = createButton("") ;
  } 

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  
  start(){
    form = new Form() ;
    form.display() ;

    player = new Player() ;
    playerCount = player.getCount();
    


player1 = createSprite(width / 2 - 100, 100) ;
player1.addImage(player1Img,"p1") ;
player1.scale = 0.6 ;

player2 = createSprite(width / 2 + 200, 10) ;
player2.addImage(player2Img,"p2") ;
player2.scale = 0.9 ;

players = [player1 , player2] ;
}

handleElement() {
  form.hide() ;
  

  this.resetTitle.html("Reset Game");
  this.resetTitle.class("resetText");
  this.resetTitle.position(width / 2 + 400, 10);

  this.resetButton.class("resetButton");
  this.resetButton.position(width / 2 + 430, 60);

  this.quizGame.html("Quiz here !!"); 
  this.quizGame.class("quizText") ;
  this.quizGame.position(width / 2 + 350 , 500) ;

  this.quizButton.class("quizButton") ;
  this.quizButton.position(width / 2 + 370 ,560 ) ;


}

play() {
  this.handleResetButton() ;
  this.handleQuizButton() ;
  this.handleElement() ;
  Player.getPlayersInfo();

  system = new System()
    security = new Security() ;


  if (allPlayers !== undefined) {
  background(room1Img) ;
   
   //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the players in x and y direction
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

       


        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) {
          camera.position.x = players[index - 1].position.x;
          camera.position.y = players[index - 1].position.y;
          fill("pink") ;
          text("Player1 :" +allPlayers.player1.name,width / 2 - 100, 300) ;
          text("player2:"+allPlayers.player2.name,width / 2 + 200, 300) ;

          if(score === 3) {
            clear()
            background(room2Img) ;
                    
          }

}
  }
  
  this.handlePlayerControl()
  drawSprites() ;
}
}

handleResetButton() {
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      palyers: {}
    });
    window.location.reload();
  });
}

handlePlayerControl() {
  if(keyIsDown(RIGHT_ARROW)){
  player.positionX -= 5 ;
  player.update() ; 
  }

  if(keyIsDown(LEFT_ARROW)){
    player.positionX += 5 ;
    player.update() ; 
    }

    
  if(keyIsDown(UP_ARROW)){
    player.positionY += 5 ;
    player.update() ; 
    }

    if(keyIsDown(DOWN_ARROW)){
      player.positionY -= 5 ;
      player.update() ; 
      }
}

handleQuizButton() {
  this.quizButton.mousePressed(() => {
    clues() ;
    security.display() ;
    system.authenticate() ;
    
    });
    

}


}

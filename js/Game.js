class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();


    hurdleMan1 = createSprite(100,200);
    hurdleMan1.addAnimation("running", runAnimation);

    hurdleMan2 = createSprite(100,500);
    hurdleMan2.addAnimation("running", runAnimation);



    hurdleMen = [hurdleMan1, hurdleMan2];

    


    }

    
  }

  play(){

    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      //give a background colour in hexadecimal.
      //background("black");
      
      //index of the array
      var index = 0;
      image(bgImage, -displayWidth, 0 , displayWidth*3, displayHeight);
      //x and y position of the cars
      var x;
      var y = 175
     

      for(var plr in allPlayers){

        hurdleMan1.display();
        hurdleMan2.display();

        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = 100;
        y = y + 220;
        //use data form the database to display the cars in y direction
        x = displayHeight - allPlayers[plr].distance;
        //hurdleMen[index-1].x = x;
        //hurdleMen[index-1].y = y;

        if (index === player.index){
          fill("black");
          ellipse(x,y,60,60);
          //console.log(player.index);
          //cars[index - 1].shapeColor = "red";
          //camera.position.x = hurdleMen[index-1].x;
          //camera.position.y = displayHeight/2;

          //camera.position.y = displayHeight/2;
          //camera.position.x = hurdleMen[index-1].x;
          //camera.position.y = displayHeight/2;

          camera.position.y = displayHeight/2;
          camera.position.x = hurdleMen[index-1].x;
          
          //camera.position.x = camera.position.x + 10;
        }
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW)){
      //&& player.index !== null
      player.distance = player.distance + 10;
      //(hurdleMan+player.index).x = (hurdleMan+player.index).x + 10
      player.update();

  
      //hurdleMen[index-1].x = hurdleMen[index-1].x + 10;

      //camera.position.x = camera.position.x + 10;
      //hurdleMen[index-1] = camera.position.x;
      //hurdleMen[player.index].x = hurdleMen[player.index].x + 10;
      
    }

    if(player.distance > 4500){
      //when it is ended
      gameState = 2;
    }

    drawSprites();

  }

  end(){
    console.log("GAME OVER");
    game.update(2);
  }

}




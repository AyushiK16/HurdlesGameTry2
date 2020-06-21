var canvas, database, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var form, player, game;

var hurdleMen, hurdleMan1, hurdleMan2;
var trackImage, groundImage;
var runAnimation;


function preload(){
  resizeBy(100,0);
  runAnimation = loadAnimation('images/running1.png', 'images/running3.png', 'images/running2.png');
  walkImage = loadImage('images/running3.png');
  trackImage = loadImage('images/racingTrack.png');
  groundImage = loadImage('images/ground.png');
  bgImage = loadImage('images/racingTrack.png');
}


function setup(){
  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //background(bgImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

  
}

var database;
var form,player,game;
var gameState=0;
var playerCount;
var allplayers;
var distance = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
if(playerCount===4){
game.update(1);
}
if(gameState=2){
clear();
game.play();
}
  
}



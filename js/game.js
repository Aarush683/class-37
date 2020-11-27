class Game {
    constructor(){

    }
    getState(){
        var gamestateRef=database.ref("gameState")
        gamestateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
      database.ref("/").update({
          gameState:state
      })
    }
    async start(){
        if(gameState===0){

          player=new Player();
          var playerCountRef=await database.ref("playerCount").once("value");
          if(playerCountRef.exists()){
           playerCount=playerCountRef.val();
           player.getcount();
          }
          
          form= new Form();
          form.display();
        }
    }
    play(){
        form.hide();
        textSize(20);
        text("gamestart",120,100);
        Player.getplayerinfo();
      if(allplayers!==undefined){
        var display_position=130;

        for(var i in allplayers){
           if(i==="player"+player.index){
               fill("red");

           }
           else{
               fill("black");
           }
            display_position+=20;
           textSize(15);
           text(allplayers[i].name+ ":"+allplayers[i].distance,120,display_position);
        }

    }
    if(keyIsDown("up")&&player.index!==null){
        player.distance+=50;
        player.update();
    }


    }
}
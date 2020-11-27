class Form{
    constructor(){
     this.title=createElement("h2");
     this.input=createInput("Name");
     this.button=createButton("Press");
     this.greeting=createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        
       this.title.html("car racing game");
        this.title.position(130,0)

        
        this.input.position(130,160)

       
       this.button.position(250,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

             player.name = this.input.value();

            playerCount+=1
            player.update();
            player.index=playerCount;
            player.updatecount(playerCount);

           
            this.greeting.html("Hello"+player.name);
            this.greeting.position(130,160);
        })
    }
}
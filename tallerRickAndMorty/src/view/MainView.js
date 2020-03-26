class MainView{
    constructor(){
        this.screen; 
        this.startScreen = new StartScreen();
    }
    preload(){

    }
    settings(){
     createCanvas(800, 423);
    }
    setup(){

    }

    draw(){

    }
    mousePressed(){
        startScreen.clickP1View();//click para pasar a GameScreen
    }
    keyPressed(){
        
    }

}
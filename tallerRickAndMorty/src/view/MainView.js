class MainView{
    constructor(){
        this.screen; 
        this.startScreen = new StartScreen();
        this.pantalla = 0;
    }
    preload(){

    }
    settings(){
     createCanvas(800, 423);
    }
    setup(){
        startScreen.cargarImagenesSC();
    }

    draw(){
        console.log("corro");
        switch(pantalla){//aqui esta variable de pantalla la setteo - la getteo?
            case 0:
            startScreen.pintarFondo2();
            break;

            case 1:

            break;
        }
    }
    mousePressed(){
        switch(pantalla){
            case 0:
            startScreen.clickP1View();//click para pasar a GameScreen
            
            break;

            case 1:

            break;
    }
}
    keyPressed(){
        
    }

}
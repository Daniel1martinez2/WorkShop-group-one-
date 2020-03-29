let screen; 
let startScreen = new StartScreen();
let pantalla = 0;

    function preload(){

    }
    function settings(){
     createCanvas(800, 423);
    }
    function setup(){
        //startScreen.cargarImagenesSC();
    }

    function draw(){
        console.log("corro");
        switch(pantalla){//aqui esta variable de pantalla la setteo - la getteo?
            case 0:
            startScreen.pintarFondo2();
            break;

            case 1:

            break;
        }
    }
    function mousePressed(){
        switch(pantalla){
            case 0:
            startScreen.clickP1View();//click para pasar a GameScreen
            
            break;

            case 1:

            break;
    }
}
function keyPressed(){
        
    }


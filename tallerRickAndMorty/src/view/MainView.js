let screen; 
let startScreen = new StartScreen();
let pantalla = 0;

    function preload(){
        startScreen.cargarImagenesSC();
    }
    function settings(){
        
    }
    function setup(){
        createCanvas(800, 423);
    }

    function draw(){
        console.log("corro");
        switch(pantalla){//aqui esta variable de pantalla la setteo - la getteo?
            case 0:
            startScreen.pintarFondo2();
            break;

            case 1:
            background(0,0,55);
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


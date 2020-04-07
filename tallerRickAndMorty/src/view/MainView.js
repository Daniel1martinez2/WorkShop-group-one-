let screen; 
let startScreen = new StartScreen();
let gameScreen = new GameScreen();
let preIntro = new PreIntro();
let pantalla ;
var introSound;



    function preload(){
        startScreen.cargarImagenesSC();
        gameScreen.cargarImagenesGS();
        preIntro.cargarImagenesPI();
        gameScreen.cargarTXT();
       this.introSound = loadSound("sfx/IntroSound.mp3");
       
    }
   
    function  setup(){
        createCanvas(1000, 530);
        gameScreen.recorrerTXT();
        this.pantalla = 2;
        introSound.play();
        introSound.setVolume(0.5); 

       
     
    }
    
    function draw(){
        //console.log("corro");

        switch(this.pantalla){
            case 0:
                
            startScreen.pintarFondo2();
            
                
            fill(255);
           // text("X: "+mouseX+ " Y: "+mouseY,mouseX,mouseY);
            break;

            case 1:
            preIntro.pintarFondo3(); 
            if(preIntro.contador3==273){
                this.pantalla=2;
            }  
            break;
                
            case 2:       
            gameScreen. pintarFondo1();
            if (gameScreen.getTimer()<110){
                //this.pantalla=1; 
            }
            break;
        }
    }
    function mouseClicked(){
        switch(this.pantalla){
            case 0:
             
                console.log("confirmoClick");
            if(mouseX>400 && mouseX<530 && mouseY>436 && mouseY<503){
                this.pantalla = 1;
              
            }
            
            break;

            case 1:

            break;
            case 2:
                gameScreen.tocoAlgo();
                gameScreen.contaSemillas(); 
            break; 
    }
}
function mouseMoved(){
    switch (this.pantalla) {
        case 0:
            if (mouseX>400 && mouseX<530 && mouseY>436 && mouseY<503) {
              startScreen.estado= true; 
            } else {
                startScreen.estado= false; 
            }
            break; 
            case 1:

            break;
}
}
function keyPressed(){
    gameScreen.teclas(key); 
    
        
    }


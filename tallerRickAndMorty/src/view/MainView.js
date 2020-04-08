let screen;
let startScreen = new StartScreen();
let gameScreen = new GameScreen();
let preIntro = new PreIntro();
let dimensionScreen = new DimensionScreen();
let resumeScreen = new ResumeScreen();
let pantalla;
var introSound;




function preload() {
    startScreen.cargarImagenesSC();
    gameScreen.cargarImagenesGS();
    preIntro.cargarImagenesPI();
    gameScreen.cargarTXT();
    dimensionScreen.cargarTXT();
    dimensionScreen.cargaImagenesDS();
    resumeScreen.cargarImagenesRS();
    this.introSound = loadSound("sfx/IntroSound.mp3");

}

function setup() {
    createCanvas(1000, 530);
    gameScreen.recorrerTXT();
    dimensionScreen.recorrerTXTDimension();
    this.pantalla = 2;
    introSound.play();
    introSound.setVolume(0.5);


}

function draw() {
    //console.log("corro");

    switch (this.pantalla) {
        case 0:

            startScreen.pintarFondo2();


            fill(255);
            break;

        case 1:
            preIntro.pintarFondo3();
            if (preIntro.contador3 == 273) {
                this.pantalla = 2;
            }
            break;

        case 2:   //garaje    
            gameScreen.pintarFondo1();
            //console.log(gameScreen.getPaso())
            if(gameScreen.getPaso() == true){
                this.pantalla = 3;
                dimensionScreen.setUltimo(millis() ); 
                

            }
            //text("X: " + mouseX + " Y: " + mouseY, mouseX, mouseY);
            break;

        case 3: //dimension
            dimensionScreen.pintarDimension();
            if (dimensionScreen.getTimer() < 0) {
                this.pantalla = 4; //aca creo que esto pasa a la pantalla de resumen
            }if(dimensionScreen.getPaso2()==true){
                this.pantalla = 4;
            }
            break;

        case 4: //resumen
      
            resumeScreen.pintarResume();
            if(dimensionScreen.getemi()==5){
                resumeScreen.pinto1(); 
    
            }else{
                resumeScreen.pinto2(); 
            }

        
            break;
    }
}
function mouseClicked() {
    console.log(dimensionScreen.getemi()+" yaaaaaparceeee")
    switch (this.pantalla) {
        case 0:

            console.log("confirmoClick");
            if (mouseX > 400 && mouseX < 530 && mouseY > 436 && mouseY < 503) {
                this.pantalla = 1;

            }

            break;

        case 1:

            break;

        case 2: //garaje
            gameScreen.tocoAlgo();
            
            break;

        case 3: //dimension
            dimensionScreen.tocoAlgo();
            dimensionScreen.contaSemillas();
           // dimensionScreen.tocoSemillas();
            break;
        case 4:
            resumeScreen.guardarTXT();
        break;

    }
}
function mouseMoved() {
    switch (this.pantalla) {
        case 0:
            if (mouseX > 400 && mouseX < 530 && mouseY > 436 && mouseY < 503) {
                startScreen.estado = true;
            } else {
                startScreen.estado = false;
            }
            break;
        case 1:

            break;

        case 4:
            resumeScreen.moveBoton();
        break;
    }
}
function keyPressed() {
    gameScreen.teclas(key);
    dimensionScreen.teclasDS(key);
}

function mouseWheel(){
    switch (this.pantalla) {
        case 4:
            resumeScreen.parallax(event.delta);
            break;
       
    }
    
}


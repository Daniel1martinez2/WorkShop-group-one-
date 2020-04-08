let screen;
let startScreen = new StartScreen();
let gameScreen = new GameScreen();
let preIntro = new PreIntro();
let dimensionScreen = new DimensionScreen();
let pantalla;
var introSound;




function preload() {
    startScreen.cargarImagenesSC();
    gameScreen.cargarImagenesGS();
    preIntro.cargarImagenesPI();
    gameScreen.cargarTXT();
    dimensionScreen.cargarTXT();
    dimensionScreen.cargaImagenesDS();
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
            text("X: " + mouseX + " Y: " + mouseY, mouseX, mouseY);
            break;

        case 3: //dimension
            dimensionScreen.pintarDimension();
            if (dimensionScreen.getTimer() < 0) {
                this.pantalla = 4; //aca creo que esto pasa a la pantalla de resumen
            }
            break;

        case 4: //resumen

            break;
    }
}
function mouseClicked() {
    switch (this.pantalla) {
        case 0:

            console.log("confirmoClick");
            if (mouseX > 400 && mouseX < 530 && mouseY > 436 && mouseY < 503) {
                this.pantalla = 1;

            }

            break;

        case 1:

            break;

        case 2:
            gameScreen.tocoAlgo();
            if (mouseX > 800 && mouseX < 1000 && mouseY > 0 && mouseY < 530) {
                this.pantalla = 3; //probando que funcione el cambio de pantalla
            }
            break;

        case 3: //dimension
            dimensionScreen.tocoAlgo();
            dimensionScreen.contaSemillas();
            dimensionScreen.tocoSemillas();
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
    }
}
function keyPressed() {
    gameScreen.teclas(key);
    dimensionScreen.teclasDS(key);


}


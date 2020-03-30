let screen; 
let startScreen = new StartScreen();
let gameScreen = new GameScreen();
let pantalla ;
let ani2;


    function preload(){
        startScreen.cargarImagenesSC();
        gameScreen.cargarImagenesGS();
    }
    function settings(){
        
    }
    function setup(){
        createCanvas(1000, 530);
        this.pantalla = 0;
        this.ani2 = false;
      
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
            gameScreen. pintarFondo1();
            break;
        }
    }
    function mouseClicked(){
        switch(this.pantalla){
            case 0:
                console.log("fwefw");
            if(mouseX>400 && mouseX<530 && mouseY>436 && mouseY<503){
                this.pantalla = 1;
                this.ani2 = true;//mirar si esto va a tenr alguna funcion, sino quitar
            }
            
            break;

            case 1:

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
}
}
function keyPressed(){
        
    }


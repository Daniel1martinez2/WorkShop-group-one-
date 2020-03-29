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
        switch(this.pantalla){//aqui esta variable de pantalla la setteo - la getteo?
            case 0:
            startScreen.pintarFondo2();
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
            if(mouseX>284 && mouseX<516 && mouseY>341 && mouseY<381){
                this.pantalla = 1;
                this.ani2 = true;
            }
            
            break;

            case 1:

            break;
    }
}
function keyPressed(){
        
    }


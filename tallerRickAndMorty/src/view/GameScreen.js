class GameScreen{
    constructor(){
        this.app; 
        this.fondo= []; 
        this.contador1 = 1;
        this.mesa;
        this.gameController = new GameController();
        console.log("entro");
    }
    cargarImagenesGS(){
        for(let i=1;i<119;i++) {
            this.fondo[i]=loadImage("Rick-Lab/lab"+" "+"("+i+").jpg");
        } 
        
        this.mesa = loadImage("images/mesa.png");

    }
    cargarTXT(){
        this.gameController.cargarTXT();
    }
    pintarFondo1(){
        image(this.fondo[this.contador1], 0, 0,1000,530);
		if(frameCount %2==0) {
            this.contador1 ++;
			if(this.contador1>115) {
				this.contador1=1;
			}
        }
        
        this.gameController.dibujar(); 
        this.gameController.drawPortal();
        this.gameController.cambioPantalla();
        image(this.mesa,0,0);
    }
  
    recorrerTXT(){
    this.gameController.recorrerTXT();
}
    teclas(c){
        this.gameController.mover(c); 
        this.gameController.pintarPortal(c);
    }
    
    tocoAlgo(){
        this.gameController.tocoAlgo(); 
    }
    getPaso(){
        return this.gameController.getPaso();
    }

 }
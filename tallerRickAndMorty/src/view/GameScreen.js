class GameScreen{
    constructor(){
        this.app; 
        this.fondo= []; 
        this.portal = [];
        this.contador1 = 1;
        this.fondo2;
        this.mesa;
        this.gameController = new GameController();
        console.log("entro");
    }
    cargarImagenesGS(){
        for(let i=1;i<119;i++) {
            this.fondo[i]=loadImage("Rick-Lab/lab"+" "+"("+i+").jpg");
        }
           for(let i=1;i<211;i++) {//portal
            this.portal[i]=loadImage("Portal/portal"+" "+"("+i+").png");
        }
        this.fondo2 = loadImage("images/scenary2.jpg");
        this.mesa = loadImage("images/mesa.png");

    }
    pintarFondo1(){
        image(this.fondo[this.contador1], 0, 0,1000,530);
		if(frameCount %2==0) {
            this.contador1 ++;
			if(this.contador1>115) {
				this.contador1=1;
			}
        }
        image(this.fondo2,0,0, 1000, 530);
        this.gameController.dibujar(); 
        image(this.mesa,0,0);
    }
    cargarTXT(){
        this.gameController.cargarTXT();
    }
    recorrerTXT(){
    this.gameController.recorrerTXT();
}
    teclas(c){
        this.gameController.mover(c); 
        
    }


}
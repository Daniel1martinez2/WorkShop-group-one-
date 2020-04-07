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
        this.ultimo; 
        this.maximo = 120000;
        this.mastempo = 0; 
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
    cargarTXT(){
        this.ultimo = millis(); 
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
        if(this.gameController.getDimension()){
            image(this.fondo2,0,0, 1000, 530);
        }
        
        this.gameController.dibujar(); 
        image(this.mesa,0,0);
        //---------------
        if(this.gameController.getDimension()){
           
           
             this.pasado = millis() - this.ultimo;
             this.restante = (this.maximo - this.pasado) / 1000;

            fill(0);
            textSize(20);  
            this.timer = parseInt(this.restante) + parseInt(this.mastempo); 
            text(this.timer,460,60); 
            }
    }
  
    recorrerTXT(){
    this.gameController.recorrerTXT();
}
    teclas(c){
        this.gameController.mover(c); 
        
    }
    getTimer(){
        return this.timer; 
    }


}
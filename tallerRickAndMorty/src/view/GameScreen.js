class GameScreen{
    constructor(){
        this.app; 
        this.fondo= []; 
        this.contador1 = 1;
        this.mesa;
        this.gameController = new GameController();
        
        this.aviso1; 
        this.aviso2; 
        this.aviso3; 
        this.aviso4; 
        this.aviso5; 

      
       
        this.ultimo= 0;
        

    }
    cargarImagenesGS(){
        for(let i=1;i<119;i++) {
            this.fondo[i]=loadImage("Rick-Lab/lab"+" "+"("+i+").jpg");
        } 
        
        this.mesa = loadImage("images/mesa.png");
        this.aviso1= loadImage("images/aviso1.png");
        this.aviso2= loadImage("images/aviso2.png");
        this.aviso3= loadImage("images/aviso3.png");
        this.aviso4= loadImage("images/aviso4.png");
        this.aviso5= loadImage("images/aviso5.png");

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
        this.tempo += parseInt(this.ultimo); 
        textSize(30); 
        this.tempo = parseInt(this.ultimo/1000); 
        text(this.tempo,200,200)
        this.letreros(); 
        
    }
    letreros(){
        if (this.tempo >5 && this.tempo<12){
            image(this.aviso1,0,0); 
        }
        if (this.tempo >14 && this.tempo<25){
            image(this.aviso2,0,0); 
        }
        if (this.tempo >27 && this.tempo<38){
            image(this.aviso3,0,0); 
        }
        if (this.tempo >40 && this.tempo<50){
            image(this.aviso4,0,0); 
        }
        if (this.tempo >53 && this.tempo<63){
            image(this.aviso5,0,0); 
        }

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
    getFondo(){
        return this.fondo;
    }
    setUltimo(c) {
        this.ultimo = c;
    }

 }
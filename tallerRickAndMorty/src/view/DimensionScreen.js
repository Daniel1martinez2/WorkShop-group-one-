class DimensionScreen{
    constructor(){
        this.dimensionController = new DimensionController();
        this.fondo2;
        this.ultimo; 
        this.maximo = 120000;
        this.mastempo = 0; 
    }
    cargaImagenesDS(){
        this.fondo2 = loadImage("images/scenary2.jpg");
        this.dimensionController.cargaSemillas();
        this.ultimo = millis(); 
    }
    cargarTXT(){
        this.dimensionController.cargarTXT(); 
    }
    recorrerTXTDimension(){
        this.dimensionController.recorrerTXTDimension();
    }
    pintarDimension(){
        image(this.fondo2,0,0);
            
        this.dimensionController.drawSemillas();
        this.dimensionController.dibujar2();

        if(this.dimensionController.getDimension()){
                   
            this.pasado = millis() - this.ultimo;
            this.restante = (this.maximo - this.pasado) / 1000;

           fill(255);
           textSize(20);  
           this.timer = parseInt(this.restante) + parseInt(this.mastempo); 
           text(this.timer,740,50); 

           fill(255);
           textSize(20);   
           text(this.dimensionController.getContadorSem(),935,48); 
           }

    }
    teclasDS(c){
        this.dimensionController.mover(c);
    }
    contaSemillas(){
        this.dimensionController.contaSemillas();
    }
    tocoSemillas(){
        this.dimensionController.tocoSemillas();
    }
    tocoAlgo(){
        this.dimensionController.tocoAlgo(); 
    }

    getTimer(){
        return this.timer; 
    }
   
}
class DimensionController{
    constructor(){
        this.logic = new Logic();

    }
    
    tocoAlgo(){//ya
        this.logic.tocoalgo(); 
    }
    mover(c){//ya
        this.logic.muevoRick(c); 
    }
    drawSemillas(){//ya
        this.logic.drawSemillas();
    }
    dibujar2(){//ya
        this.logic.test1DrawAnObject(); 
    }
    mover(c){
        this.logic.muevoRick(c); 
    }
    cargarTXT(){
        this.logic.cargarTXT();
    }
    contaSemillas(){//ya
        this.logic.contaSemillas();
        this.logic.setToqueaSemilla(true);
    }
    getContadorSem(){//ya
        return this.logic.getContadorSem();
    }
    getDimension(){//ya
        return this.logic.getDimension(); 
    }
    cargaSemillas(){//ya
        this.logic.cargaSemillas();
    }
    recorrerTXTDimension(){
        this.logic.recorrerTXTDimension();
        this.logic.recorrerTXT();
    }
    pintarPortal(d){
        if(d == ' '){
            this.logic.pintarPortal(true);
            this.logic.setToqueRick(true);
            this.logic.setToquearma(true)
        }
    }
    drawPortal(){
        this.logic.drawPortal();
    }
    getPaso(){
        return this.logic.paso;
     }

     getPaso2(){
         return this.logic.paso2; 
     }

     cambioPantalla2(){
         this.logic.cambioPantalla2(); 
     }
  
   
}
class GameController{
    constructor(){
        this.logic = new Logic() ;
        console.log("entro al contro");
        
    }
    dibujar(){
        this.logic.test1DrawAnObject(); 
    }
    mover(c){
        this.logic.muevoRick(c); 
    }
    cargarTXT(){
        this.logic.cargarTXT();
        this.logic.cargaSemillas();
    }
    recorrerTXT(){
        this.logic.recorrerTXT();
        this.logic.recorrerTXTDimension();
    }
    tocoAlgo(){
        this.logic.tocoalgo(); 
    }
     pintarPortal(b){
         if(b == ' '){
        this.logic.pintarPortal(true);
         }
    }
    drawPortal(){
        this.logic.drawPortal();
    }
    cambioPantalla(){
        this.logic.cambioPantalla();
    }
    getPaso(){
       return this.logic.paso;
    }
    
   
}
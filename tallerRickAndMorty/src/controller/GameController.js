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
    }
    recorrerTXT(){
        this.logic.recorrerTXT();
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
    
   
}
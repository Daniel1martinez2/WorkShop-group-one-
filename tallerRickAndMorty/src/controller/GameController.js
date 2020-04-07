class GameController{
    constructor(){
        this.logic = new Logic() ;
        this.app; 
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
    getDimension(){
        return this.logic.getDimension(); 
    }
    tocoAlgo(){
        this.logic.tocoalgo(); 
    }
    contaSemillas(){
        this.logic.contaSemillas();
    }
    getContadorSem(){
        return this.logic.getContadorSem();
    }
}
class GameController{
    constructor(){
        this.logic = new Logic() ;
        this.app; 
        this.logic.recorrerTXT();
        console.log("entro al contro");
    }
    dibujar(){

    }
    mover(){
        
    }
    cargarTXT(){
        this.logic.cargarTXT();
    }
}
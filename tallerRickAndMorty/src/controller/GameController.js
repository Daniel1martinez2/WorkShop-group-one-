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
}
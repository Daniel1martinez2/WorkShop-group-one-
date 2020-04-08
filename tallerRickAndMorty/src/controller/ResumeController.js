class ResumeController{
    constructor(){
        this.model = new Logic();
    }

    getGano(){
       
        return this.model.gano;
    }
    
    cargarTXT(){
        this.model.cargarTXT();
        this.model.cargarSemillas();
    }
    recorrerTXT(){
        this.model.recorrerTXT();
        this.model.recorrerTXTDimension();
    }
  
}
class ResumeController{
    constructor(){
        this.model = new Logic();
    }

    getGano(){
       
        return this.model.gano;
    }
    guardarTXT(){
        this.model.guardarNuevoTxt();
    }
  
}
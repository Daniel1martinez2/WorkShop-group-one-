class ResumeController{
    constructor(){
        this.app; 
        this.model = new Logic();
    }

    getGano(){
        return this.model.getGano();
    }
    guardarTXT(){
        this.model.guardarNuevoTxt();
    }
}
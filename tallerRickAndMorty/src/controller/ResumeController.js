class ResumeController{
    constructor(){
        this.model = new Logic();
    }

    getGano(){
        console.log(this.model.gano +"triple hp");
        return this.model.gano;
    }
    guardarTXT(){
        this.model.guardarNuevoTxt();
    }
}
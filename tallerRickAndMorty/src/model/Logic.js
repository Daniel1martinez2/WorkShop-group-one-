class Logic{
    constructor(){
        this.rickAndMorty = new RickYMorty(); 
        this.txtOriginal = []; 
        this.arma; 
        this.semillas=[]; 
        this.ganaste ;
        this.rick
        console.log("entro a la logic");
        this.recorrerTXT();
    }
    cargarTXT() {
        this.txtOriginal = loadStrings("data/Import/cuento.txt");
    
    }

    toqueObjeto(){

    }
    recorrerTXT(){
        
        console.log(this.txtOriginal);
    }
    guardarNuevo(){
        
    }

    test1DrawAnObject(){
       
        console.log(2+2); 
        this.rickAndMorty.pintar(); 

    }

 
    
}



class Logic{
    constructor(){
        this.rickAndMorty = new RickYMorty(); 
        this.txtOriginal = []; 
        this.ensayo;
        this.ensa = [];
        this.arma; 
        this.semillas=[]; 
        this.ganaste ;
        this.rick
            }
    cargarTXT() {
        this.txtOriginal = loadStrings("data/Import/cuento.txt");
        
    }

    toqueObjeto(){

    }
    recorrerTXT(){
        this.ensayo = join(this.txtOriginal, " ");
        this.ensa = split(this.ensayo, " ");
        console.log(this.ensa[1]);
    }
    guardarNuevo(){
        
    }

    test1DrawAnObject(){
       
        console.log(2+2); 
        this.rickAndMorty.pintar(); 

    }

 
    
}



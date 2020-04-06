class Logic{
    constructor(){
        
        this.txtOriginal = []; 
        this.ensayo;
        this.ensa = [];
        this.arma; 
        this.semillas=[]; 
        this.ganaste ;
        this.rickImage; 
            }
    cargarTXT() {
        this.txtOriginal = loadStrings("data/Import/cuento.txt");
        this.rickImage = loadImage("img/ricknormi.png"); 
    }

    toqueObjeto(){

    }
    recorrerTXT(){
        this.ensayo = join(this.txtOriginal, " ");
        //this.ensa = split(this.ensayo, " ");
        if (this.ensayo.includes("Rick and morty")) {
            console.log("Si hay rick")
            this.rickAndMorty = new RickYMorty(170,150); 
        }
        if (this.ensayo.includes("mega semillas")) {
            console.log("Si hay mega semillas")
        }
        if (this.ensayo.includes("arma portal")) {//Aquí creamos por tal y arma
            console.log("Si hay arma portal")
        }

    }
    guardarNuevo(){
        
    }

    test1DrawAnObject(){
       
        console.log(2+2); 
        this.rickAndMorty.pintar(this.rickImage ); 

    }

    muevoRick(c){
        this.rickAndMorty.move(c); 
    }

 
    
}



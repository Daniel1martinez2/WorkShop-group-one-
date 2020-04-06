class Logic{
    constructor(){
        
        this.txtOriginal = []; 
        this.ensayo;
        this.ensa = [];
        this.arma; 
        this.semillas=[5]; 
        this.ganaste ;
        this.rickImage;
        this.imagenSemillas = [];
        this.imagenSemillasfeed = [];
        this.pistolaImagen = [];
        this.gun;

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
            this.semillas[0];
            this.semillas[1];
            this.semillas[2];
            this.semillas[3];
            this.semillas[4];
        }
        if (this.ensayo.includes("arma portal")) {//Aquí creamos por tal y arma
            console.log("Si hay arma portal")
             
            this.gun;

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



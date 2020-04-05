class Logic{
    constructor(){
        this.rickAndMorty = new RickYMorty(0,150); 
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
        this.ensa = split(this.ensayo, " ");
        console.log(this.ensa[1]);
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



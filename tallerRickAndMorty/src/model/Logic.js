class Logic{
    constructor(){
        
        this.txtOriginal = []; 
        this.ensayo;
        this.ensa = [];
        this.arma; 
        
        this.ganaste ;
        this.rickImage;
        this.rickImageFeedBack; 
        this.imagenSemillas = [];
        this.imagenSemillasfeed = [];
        this.pistolaImagen = [];
        this.gun;

        this.semilla1; 
        this.semilla1Feed;

        this.semilla2; 
        this.semilla2Feed; 

        this.semilla3; 
        this.semilla3Feed;

        this.semilla4; 
        this.semilla4Feed;  

        this.semilla5; 
        this.semilla5Feed;

        this.dimension = true;  //nueva variable

        this.contador; 


        }
    cargarTXT() {
        this.txtOriginal = loadStrings("data/Import/cuento.txt");
        this.rickImage = loadImage("img/ricknormi.png"); 
        this.rickImageFeedBack =loadImage("img/ricknormiFeedBack.png"); 

        this.semilla5= loadImage("Objetos/Semillas-5.png") ; 
        this.semilla5Feed= loadImage("Objetos/SemillasFeed-5.png"); 

        this.semilla1= loadImage("Objetos/Semillas-1.png") ; 
        this.semilla1Feed= loadImage("Objetos/SemillasFeed-1.png"); 

        this.semilla2= loadImage("Objetos/Semillas-2.png") ; 
        this.semilla2Feed= loadImage("Objetos/SemillasFeed-2.png"); 

        this.semilla3= loadImage("Objetos/Semillas-3.png") ; 
        this.semilla3Feed= loadImage("Objetos/SemillasFeed-3.png"); 

        this.semilla4= loadImage("Objetos/Semillas-4.png") ; 
        this.semilla4Feed= loadImage("Objetos/SemillasFeed-4.png"); 

    }

    toqueObjeto(){

    }
    recorrerTXT(){
        this.ensayo = join(this.txtOriginal, " ");
        //this.ensa = split(this.ensayo, " ");
        if (this.ensayo.includes("Rick and morty")) {
            console.log("Si hay rick")
            this.rickAndMorty = new RickYMorty(170,150,this.rickImage,this.rickImageFeedBack); 
        }
        if (this.ensayo.includes("mega semillas")) {
            this.semillas=[5]; 
            console.log("Si hay mega semillas")
            this.semillas[0]=new Seed(249,64,this.semilla1,this.semilla1Feed); 
            this.semillas[1]=new Seed(393,54,this.semilla2,this.semilla2Feed);
            this.semillas[2]=new Seed(949,443,this.semilla3,this.semilla3Feed);
            this.semillas[3]=new Seed(691,275,this.semilla4,this.semilla4Feed);
            this.semillas[4]=new Seed(125,441,this.semilla5,this.semilla5Feed);
        }
        if (this.ensayo.includes("arma portal")) {//Aquí creamos por tal y arma
            console.log("Si hay arma portal")
             
            this.gun;

        }

    }
    guardarNuevo(){
        
    }

    test1DrawAnObject(){
        this.rickAndMorty.pintar( ); 
        this.rickAndMorty.sensibleArea(); 
        if(this.dimension){  
          for (let i = 0; i < this.semillas.length; i++) {
          this.semillas[i].pintar(); 
          this.semillas[i].sensibleArea(); 
        }
  
       }
    }

    muevoRick(c){
        this.rickAndMorty.move(c); 
    }

    tocoalgo(){
        
    }

    getDimension() {
		return this.dimension;
	}
 
    
}



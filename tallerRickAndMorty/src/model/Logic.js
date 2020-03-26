class Logic{
    constructor(){
        this.rickAndMorty; 
        this.txtOriginal=[]; 
        this.arma; 
        this.semillas=[]; 
        this.ganaste ;
        this.pantalla = 0;
        this.ani2 = false;

    }

    toqueObjeto(){

    }
    recorrerTXT(){

    }
    guardarNuevo(){
        
    }
    clickPantalla1(){//para pasar a la pantalla de juego 
        if(mouseX>284 && mouseX<516 && mouseY>341 && mouseY<381){
            this.pantalla = 2;
            this.ani2 = true;
        }
    }
}
class ResumeScreen{
    constructor(){
        this.app; 
        this.fondo3=[];
        this.fondoFondo;
        this.contador3 = 1; 
        this.posYimagenes = 0;
        this.resumeController = new ResumeController();
        this.ganaste;
        this.perdiste;
        this.botonTXT;
        this.botonTXTF;
        this.tocoBoton = false;
        this.imagenObjetos;
        
    }
    cargarImagenesRS(){

        for(let i=1;i<119;i++) {
            this.fondo3[i]=loadImage("Rick-Lab/lab"+" "+"("+i+").jpg");
        } 

        this.fondoFondo = loadImage("images/resumeFondo.png");
        this.ganaste = loadImage("images/ganaste.png");
        this.perdiste = loadImage("images/perdiste.png");
        this.botonTXT = loadImage("images/botonNuevotxt.png");
        this.botonTXTF = loadImage("images/botonNuevotxtFeed.png");
        this.imagenObjetos = loadImage("Objetos/todoslosobjetos.png");;
    }
    pintarResume(){

        image(this.fondoFondo,0,0);
        image(this.imagenObjetos,0,0);
        
        

        image(this.fondo3[this.contador3], 0, this.posYimagenes,1000,530);
		if(frameCount %2==0) {
            this.contador3 ++;
			if(this.contador3>115) {
				this.contador3=1;
			}
        }
        if (this.resumeController.getGano()==true) {
          
        }else{
           // image(this.perdiste,0,this.posYimagenes)
           
        }
        
    }
    pinto1(){
        image(this.ganaste,0,this.posYimagenes); 

    }
    pinto2(){
        image(this.perdiste,0,this.posYimagenes); 

    }

    parallax(c){
        //this.posYimagenes+= c;
        if (this.posYimagenes < -530) {
            this.posYimagenes = -530;
        } else {
            this.posYimagenes -= c;
        }

        if (this.posYimagenes > 0) {
            this.posYimagenes = 0;
        } else {
            this.posYimagenes -= c;
        }
    }

    
    cargarTXT(){
        resumeController.cargarTXT();
    }
    recorrerTXT(){
        resumeController.recorrerTXT();
    }
}


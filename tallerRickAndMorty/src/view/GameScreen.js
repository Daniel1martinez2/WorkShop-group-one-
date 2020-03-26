class GameScreen{
    constructor(){
        this.app; 
        this.fondo= []; 
        this.contador1; 
        this.fondo2;

    }
    cargarImagenesGS(){
        for(let i=1;i<119;i++) {
            fondo[i]=loadImage("Rick-Lab/lab"+" "+"("+i+").jpg");
        }
        fondo2 = loadImage("images/scenary2.jpg");


    }
    pintarFondo1(){
        
    }
}
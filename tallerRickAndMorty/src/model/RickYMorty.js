class RickYMorty{
    constructor(posX,posY){
        this.app = new p5(); 
        this.tengoArma; 
        this.muñecos; 
        this.posX= posX; 
        this.posY= posY; 

    }

    pintar(){
        this.app.ellipse(100,100,100,100); 
    }
}
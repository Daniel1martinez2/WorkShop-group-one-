class RickYMorty{
    constructor(posX,posY){
        this.app = new p5(); 
        this.tengoArma; 
        this.muñecos; 
        this.posX= posX; 
        this.posY= posY; 

    }

    pintar(img){
        this.app.image(img,this.posX,this.posY,parseInt(200/1.2),parseInt(420/1.2)); 
        //this.app.ellipse(100,100,100,100); 
    }

    move(c){
        switch (c) {
            case 'd':
                console.log("muevorick"); 
                this.posX+=30; 
                break;
            case 'a':
                console.log("muevorick"); 
                this.posX-=30; 
                break;
        
            default:
                break;
        }

    }
}
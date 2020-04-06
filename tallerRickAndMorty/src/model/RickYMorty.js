class RickYMorty{
    constructor(posX,posY){
   
        this.tengoArma; 
        this.muñecos; 
        this.posX= posX; 
        this.posY= posY;
        this.meToca = false;

    }

    pintar(img){
      image(img,this.posX,this.posY,parseInt(250/1.2),parseInt(420/1.2)); 
        //this.app.ellipse(100,100,100,100); 
    }

    move(c){
        switch (c) {
            case 'd':
                console.log("muevorick"); 
                this.posX+=30; 
                console.log(this.posX);
                break;
            case 'a':
                console.log("muevorick"); 
                if(this.posX<200){
                    this.posX = 170;
                }else{
                    this.posX-=30; 
                }
                break;
        
            default:
                break;
        }

    }
}
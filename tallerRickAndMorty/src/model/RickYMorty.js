class RickYMorty extends Object_1{
    constructor(posX,posY,imagen,feedImage){
        super(posX,posY,imagen,feedImage);
   
        this.tengoArma; 
        this.muñecos; 
        this.meToca = false;

    }

  

    move(c){
        switch (c) {
            case 'd':
               
                this.posX+=30; 
                
                break;
            case 'a':
               
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
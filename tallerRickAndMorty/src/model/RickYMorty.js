class RickYMorty extends Object_1{
    constructor(posX,posY,imagen,feedImage){
        super(posX,posY,imagen,feedImage);
   
        this.tengoArma; 
        this.muñecos; 
        this.meToca = false;
    }

    pintar(){
        if(this.toco == true){
            
            image(this.feedImage,this.posX,this.posY);

        } else if(this.selected == true){

            image(this.feedImage,this.posX,this.posY);

        }else{

            image(this.imagen,this.posX,this.posY); 

        }

    }

    tocoClick(){  // este es para mousepressed pero pues seria bueno hacerlo elegante
        this.areaSensible = (mouseX > this.posX && mouseX <
            (this.posX+this.imagen.width) && mouseY > 
            this.posY && mouseY < (this.posY+this.imagen.height));
     

       if(this.areaSensible){
              
               this.selected = true; 
           }else{
               this.selected = false;
           }


    }

    move(c){
        switch (c) {
            case 'd':
                if (this.selected == true) {
                    this.posX+=30;
                }
                 
                break;
            case 'w':
          
            break;


            case 'a':
            if (this.selected == true) {

                if(this.posX<200){
                    this.posX = 170;
                }else{
                    this.posX-=30; 
                }
                break;

            } 
                
        
            default:
                break;
        }

    }
}
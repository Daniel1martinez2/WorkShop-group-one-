class Object_1{
    constructor(posX,posY,imagen,feedImage){
        this.app; 
        this.toco = false; 
        this.imagen = imagen; 
        this.feedImage = feedImage; 
        this.posX= posX; 
        this.posY= posY; 
        this.mensaje; 
        this.selected = false; 
        this.areaSensible;
        this.cambioenX = parseInt(250/1.1); 
        this.cambioenY= parseInt(420/1.2); 
    }
    pintar(){
        if(this.toco == true){
            
            image(this.feedImage,this.posX,this.posY);
        }else{
            image(this.imagen,this.posX,this.posY);    
        }

    }
    sensibleArea(){
       this.areaSensible = (mouseX > this.posX && mouseX <
             (this.posX+this.imagen.width) && mouseY > 
             this.posY && mouseY < (this.posY+this.imagen.height));
      

        if(this.areaSensible){
                this.toco= true;
       
            }else{
                this.toco= false; 
               
            }

    }
    tocoClick(){  // este es para mousepressed pero pues seria bueno hacerlo elegante
        this.areaSensible = (mouseX > this.posX && mouseX <
            (this.posX+this.imagen.width) && mouseY > 
            this.posY && mouseY < (this.posY+this.imagen.height));
     

       if(this.areaSensible){
              
               this.selected = true; 
           }


    }
    getToco(){
        return this.toco; 
    }
    getSelected(){
        return this.selected; 
    }
    pintarMensaje(){}
    
}
class Object_1{
    constructor(posX,posY,imagen,feedImage){
        this.app; 
        this.toco; 
        this.imagen = imagen; 
        this.feedImage = feedImage; 
        this.posX= posX; 
        this.posY= posY; 
        this.mensaje; 
        this.areaSensible;
    }
    pintar(){
        if(this.toco == true){
            
            image(this.imagen,this.posX,this.posY);
        }else{
            image(this.feedImage,this.posX,this.posY);    
        }

    }
    sensibleArea(){
        areaSensible = (mouseX > this.posX && mouseX < (this.posX+this.imagen.width) && mouseY > this.posY && mouseY < (this.posY+this.imagen.height));
        return areaSensible;
    }
    pintarMensaje(){}
    
}
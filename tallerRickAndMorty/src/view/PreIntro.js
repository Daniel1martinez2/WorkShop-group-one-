class PreIntro{
    constructor(){
    this.fondo3 = [];
    this.contador3 = 1;

    }
    cargarImagenesPI(){
    for(let i=1;i<383;i++) {
        this.fondo3[i]=loadImage("preGame/preIntro"+" "+"("+i+").jpg");
    }
    }

    pintarFondo3(){
        image(this.fondo3[this.contador3], 0, 0);
    if(frameCount %4==0) {
        this.contador3 ++;
        if(this.contador3>380) {
            this.contador3=380;
        }
    }
    }
}
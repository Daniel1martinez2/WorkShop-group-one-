class Gun extends Object_1 {
    constructor(posX, posY, imagen, feedImage, portal) {
        super(posX, posY, imagen, feedImage);
        this.portal = portal;
        this.contadorP = 1;
        this.meTienen = false;
        this.pintoSalida = false;
        this.pintoEntrada = false;
    }
    drawGate1(posX, posY) {
        if (this.pintoSalida == true) {
            image(this.portal[this.contadorP], posX, posY,1000,900);
            if (frameCount % 2 == 0) {
                this.contadorP++;
                if (this.contadorP >178 ) {
                    this.contadorP = 178;
                }
            }
        }
    }
  
    setPintoSalida(b){
        this.pintoSalida = b;
    }
    pintar() {
        if (this.toco == true) {

            image(this.feedImage, this.posX, this.posY);

        } else if (this.meTienen == true) {


        } else if (this.selected == true) {
            this.posX = mouseX;
            this.posY = mouseY;
            image(this.feedImage, mouseX, mouseY);

        } else {
            image(this.imagen, this.posX, this.posY);
        }

    }
    setMeTienen(n) {
        this.meTienen = n;
    }
    tocoClick() {  // este es para mousepressed pero pues seria bueno hacerlo elegante
        this.areaSensible = (mouseX > this.posX && mouseX <
            (this.posX + this.imagen.width) && mouseY >
            this.posY && mouseY < (this.posY + this.imagen.height));


        if (this.areaSensible) {

            this.selected = true;
        } else {
            this.selected = false;
        }


    }
}
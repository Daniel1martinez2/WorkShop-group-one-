class RickYMorty extends Object_1 {
    constructor(posX, posY, imagen, feedImage, imaP, imaPf) {
        super(posX, posY, imagen, feedImage);

        this.tengoArma = false;
        this.muñecos;
        this.meToca = false;
        this.imaP = imaP;
        this.imaPf = imaPf;

    }

    pintar() {
        if (this.toco == true) {

            image(this.feedImage, this.posX, this.posY);

        } else if (this.selected == true) {

            image(this.feedImage, this.posX, this.posY);


        } else {

            image(this.imagen, this.posX, this.posY);

        }

    }
    pintarConArma() {
        if (this.tengoArma == true && this.toco == true) {
            image(this.imaPf, this.posX, this.posY);
        } else if (this.tengoArma == true && this.selected == true) {
            image(this.imaPf, this.posX, this.posY);

        }
         else {
            //console.log(this.toco);
            //console.log(this.selected);

            image(this.imaP, this.posX, this.posY);

         }
    }
    setTengoArma(m) {
        this.tengoArma = m;
    }
    getTengoArma() {
        return this.tengoArma;
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

    move(c) {
        switch (c) {
            case 'd':
                if (this.selected == true) {
                    this.posX += 30;
                }

                break;
            case 'w':

                break;


            case 'a':
                if (this.selected == true) {

                    if (this.posX < 200) {
                        this.posX = 170;
                    } else {
                        this.posX -= 30;
                    }
                    break;

                }


            default:
                break;
        }

    }
}
class DimensionScreen {
    constructor() {
        this.dimensionController = new DimensionController();
        this.fondo2;
        this.arbusto;
        this.ultimo;
        this.maximo = 200000;
        this.mastempo = 0;
        this.fuente;
        this.oscu1;
        this.oscu2;
        this.oscu3;
        this.ultimo;
    }
    cargaImagenesDS() {
        this.fondo2 = loadImage("images/dimension.jpg");
        this.arbusto = loadImage("images/arbusto.png");
        this.oscu1 = loadImage("images/oscu1.jpg");
        this.oscu2 = loadImage("images/oscu2.jpg");
        this.oscu3 = loadImage("images/oscu3.jpg");
        this.dimensionController.cargaSemillas();


        this.fuente = loadFont("Fuentes/misfitsA.otf");
    }
    cargarTXT() {
        this.dimensionController.cargarTXT();
    }
    recorrerTXTDimension() {
        this.dimensionController.recorrerTXTDimension();
    }
    pintarDimension() {

        image(this.fondo2, 0, 0);
        if (this.timer < 90) {
            image(this.oscu1, 0, 0);
        }
        if (this.timer < 70) {
            image(this.oscu2, 0, 0);
        }
        if (this.timer < 50) {
            image(this.oscu3, 0, 0);
        }

        this.dimensionController.drawSemillas();
        this.dimensionController.dibujar2();
        image(this.arbusto, 0, 0);

        if (this.dimensionController.getDimension()) {

            this.pasado = millis() - this.ultimo;
            this.restante = (this.maximo - this.pasado) / 1000;

            fill(255);
            textSize(22);
            textFont(this.fuente);
            this.timer = parseInt(this.restante) + parseInt(this.mastempo);
            text("Tiempo restante: " + this.timer, 740, 50);

            fill(255);
            textSize(22);
            text(this.dimensionController.getContadorSem(), 935, 50);
        }
        this.dimensionController.drawPortal();



    }
    teclasDS(c) {

        this.dimensionController.mover(c);
        if (this.dimensionController.getContadorSem() == 5) {
            this.dimensionController.pintarPortal(c);

        }

        if (c == 'f') {
            //  this.ultimo= millis(); 
        }

    }
    contaSemillas() {
        this.dimensionController.contaSemillas();
    }
    tocoAlgo() {
        this.dimensionController.tocoAlgo();
    }

    getTimer() {
        return this.timer;
    }
    setUltimo(c) {
        this.ultimo = c;
    }

}
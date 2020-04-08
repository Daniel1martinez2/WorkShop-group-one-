class Logic {
    constructor() {

        this.txtOriginal = [];
        this.ensayo;
        this.ensa = [];
        this.arma;
        this.nuevoTXT = [];

        this.ganaste;
        this.rickImage;
        this.rickImageFeedBack;
        this.imagenSemillas = [];
        this.imagenSemillasfeed = [];
        this.pistolaImagen = [];
        this.gun;
        this.portal = [];

        this.contadorSemillas = 0;

        this.semilla1;
        this.semilla1Feed;

        this.semilla2;
        this.semilla2Feed;

        this.semilla3;
        this.semilla3Feed;

        this.semilla4;
        this.semilla4Feed;

        this.semilla5;
        this.semilla5Feed;

        this.dimension = true;  //nueva variable

        this.pisto1;
        this.pisto2;
        this.conPisto;
        this.conPistoF;
        this.paso = false;
        this.paso2 = false;

        this.gano = false;

    }
    cargarTXT() {
        this.txtOriginal = loadStrings("data/Import/cuento.txt");
        this.rickImage = loadImage("img/ricknormi.png");
        this.rickImageFeedBack = loadImage("img/ricknormiFeedBack.png");
        this.pisto1 = loadImage("Objetos/Pistola1.png");
        this.pisto2 = loadImage("Objetos/Pistola2.png");
        this.conPisto = loadImage("img/rickArmaPortal.png");
        this.conPistoF = loadImage("img/rickArmaPortalFeed.png");

        for (let i = 1; i < 211; i++) {//portal
            this.portal[i] = loadImage("Portal/portal" + " " + "(" + i + ").png");
        }
    }
    cargaSemillas() {
        this.semilla5 = loadImage("Objetos/Semillas-5.png");
        this.semilla5Feed = loadImage("Objetos/SemillasFeed-5.png");

        this.semilla1 = loadImage("Objetos/Semillas-1.png");
        this.semilla1Feed = loadImage("Objetos/SemillasFeed-1.png");

        this.semilla2 = loadImage("Objetos/Semillas-2.png");
        this.semilla2Feed = loadImage("Objetos/SemillasFeed-2.png");

        this.semilla3 = loadImage("Objetos/Semillas-3.png");
        this.semilla3Feed = loadImage("Objetos/SemillasFeed-3.png");

        this.semilla4 = loadImage("Objetos/Semillas-4.png");
        this.semilla4Feed = loadImage("Objetos/SemillasFeed-4.png");

    }

    toqueObjeto() {

    }
    recorrerTXT() {
        this.ensayo = join(this.txtOriginal, " ");

        console.log(this.ensayo);

        if (this.ensayo.includes("Rick and morty")) {
            console.log("Si hay rick")
            this.rickAndMorty = new RickYMorty(170, 150, this.rickImage, this.rickImageFeedBack, this.conPisto, this.conPistoF);
        }

        if (this.ensayo.includes("arma portal")) {//Aquí creamos por tal y arma
            console.log("Si hay arma portal")

            this.gun = new Gun(393, 310, this.pisto1, this.pisto2, this.portal);

        }

    }
    recorrerTXTDimension() {
        this.ensayo = join(this.txtOriginal, " ");
        if (this.ensayo.includes("mega semillas")) {//OJO SI ESTO FUNCIONA
            this.semillas = [5];
            console.log("Si hay mega semillas")
            this.semillas[0] = new Seed(249, 64, this.semilla1, this.semilla1Feed);
            this.semillas[1] = new Seed(393, 54, this.semilla2, this.semilla2Feed);
            this.semillas[2] = new Seed(948, 440, this.semilla3, this.semilla3Feed);
            this.semillas[3] = new Seed(690, 275, this.semilla4, this.semilla4Feed);
            this.semillas[4] = new Seed(125, 441, this.semilla5, this.semilla5Feed);

        }
    }
    pistolaRick() {
        // consoleconsole.log((this.rickAndMorty.getPosX() + 40));
        //console.log(this.gun.getPosX());
        if (this.rickAndMorty.getAreaSensible() && this.gun.getSelected() == true) {
            this.rickAndMorty.setTengoArma(true);
            this.gun.setMeTienen(true);
        }
    }

    test1DrawAnObject() {
        if (this.rickAndMorty.getTengoArma()) {
            this.rickAndMorty.pintarConArma();
        } else {
            this.rickAndMorty.pintar();
        }
        this.rickAndMorty.sensibleArea();
        this.gun.pintar();
        this.gun.sensibleArea();
        this.pistolaRick();


    }
    drawPortal() {
        if (this.rickAndMorty.tengoArma == true) {
            this.gun.drawGate1(0, -275);
        }
    }
    pintarPortal(b) {
        this.gun.setPintoSalida(b);

    }
    cambioPantalla() {
        if (this.rickAndMorty.getPosX() >= 600 && this.paso2 == false) {
            this.gun.setPintoSalida(false);
            this.paso = true;
        }
    }
    cambioPantalla2() {
        if (this.rickAndMorty.getPosX() >= 600) {
            this.gun.setPintoSalida(false);
            this.paso2 = true;
            if (this.paso2 == true) {
                this.gano = true;

                console.log(this.gano + "ENTRANDO");
            }
        }
    }

    drawSemillas() {
        if (this.dimension) {
            for (let i = 0; i < this.semillas.length; i++) {
                if (this.semillas[i].getSelected() == false) {
                    this.semillas[i].pintar();
                }
                this.semillas[i].sensibleArea();
            }

        }
    }

    muevoRick(c) {
        this.rickAndMorty.move(c);
    }



    tocoalgo() {
        this.rickAndMorty.tocoClick();
        this.gun.tocoClick();

        for (let i = 0; i < this.semillas.length; i++) {
            this.semillas[i].tocoClick();
        }
        this.modificarTxt();
    }

    getDimension() {
        return this.dimension;
    }

    contaSemillas() {
        this.contadorSemillas = 0;
        console.log("Cuento semillas")
        for (let s = 0; s < this.semillas.length; s++) {
            if (this.semillas[s].getSelected() == true) {
                this.contadorSemillas++;
            }
        }

    }
    getContadorSem() {
        return this.contadorSemillas;
    }

    modificarTxt() {//este metodo no esta en los controllers, va?

        if (this.rickAndMorty.getSelected()) {
            let palabras = "Rick and morty";
            this.ensayo.replace(palabras, palabras.toUpperCase());
        }
        for (let se = 0; se < this.semillas.length; se++) {


            if (this.semillas[se].getSelected()) {
                let palabras = "mega semillas";
                this.ensayo.replace(palabras, palabras.toUpperCase());
                break;
            }

        }

        if (this.gun.getSelected()) {
            let palabras = "arma portal";
            this.ensayo.replace(palabras, palabras.toUpperCase());
        }

    }
    guardarNuevoTxt() {//este tampoco
        this.ensa = split(this.ensayo, " ");

        saveStrings(this.ensa, 'CuentoModificado.txt');

    }



    pintarResume() {
        if (this.rickAndMorty.getSelected()) {

        }
        for (let se = 0; se < this.semillas.length; se++) {


            if (this.semillas[se].getSelected()) {

            }

        }

        if (this.gun.getSelected()) {

        }

    }

}



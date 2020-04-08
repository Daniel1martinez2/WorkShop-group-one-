class DimensionController{
    constructor(){
        this.logic = new Logic();

    }
    tocoSemillas(){//ya
        this.logic.tocoSemillas();
    }
    tocoAlgo(){//ya
        this.logic.tocoalgo(); 
    }
    mover(c){//ya
        this.logic.muevoRick(c); 
    }
    drawSemillas(){//ya
        this.logic.drawSemillas();
    }
    dibujar2(){//ya
        this.logic.test1DrawAnObject(); 
    }
    contaSemillas(){//ya
        this.logic.contaSemillas();
    }
    getContadorSem(){//ya
        return this.logic.getContadorSem();
    }
    getDimension(){//ya
        return this.logic.getDimension(); 
    }
    cargaSemillas(){//ya
        this.logic.cargaSemillas();
    }
    recorrerTXTDimension(){
        this.logic.recorrerTXTDimension();
    }
}
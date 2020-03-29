class StartScreen{
constructor(){
    this.app; 
    this.fondo2=[]; 
    this.contador1; 
    this.fondo1;
    this.startController = new StartController();
    this.pantalla = 0;
    this.ani2=false;
}
clickP1View(){
    if(mouseX>284 && mouseX<516 && mouseY>341 && mouseY<381){
        this.pantalla = 2;
        this.ani2 = true;
        }
    }

cargarImagenesSC(){
    fondo1 = loadImage("images/pantallaIni.jpg");
}
pintarFondo2(){
    image(fondo1, 0, 0);
}
    

}
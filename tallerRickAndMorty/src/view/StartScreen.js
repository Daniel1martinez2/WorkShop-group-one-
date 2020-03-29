class StartScreen{
constructor(){
    this.app; 
    this.fondo2=[]; 
    this.contador1; 
    this.fondo1;
    this.startController = new StartController();
   
}

cargarImagenesSC(){
    this.fondo1 = loadImage("images/pantallaIni.jpg");
}
pintarFondo2(){
    image(this.fondo1, 0, 0,1000,530);
}
    

}
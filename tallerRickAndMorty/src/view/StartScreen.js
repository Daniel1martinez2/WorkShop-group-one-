class StartScreen{
constructor(){
    this.app; 
    this.fondo2=[]; 
    this.contador1; 
    this.fondo1;
    this.startController = new StartController();
}
clickP1View(){
    startController.StartController();
}
cargarImagenesSC(){
    fondo1 = loadImage("images/pantallaIni.jpg");
}
pintarFondo2(){
    
}
    

}
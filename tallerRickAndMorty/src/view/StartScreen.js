class StartScreen{
constructor(){
    this.app; 
    this.fondo2=[]; 
    this.contador2 = 1; 
    this.fondo1;
    this.start1;
    this.start2;
    this.startController = new StartController();
    //this.mainView = new MainView();
   
}

cargarImagenesSC(){
    for(let i=1;i<128;i++) {
        this.fondo2[i]=loadImage("RickyMortyIntro/Rick"+" "+"("+i+").png");
    }
    this.start1 = loadImage("images/start1.png");
    this.start2 = loadImage("images/start2.png");

}
pintarFondo2(){
    image(this.fondo2[this.contador2], 0, 0,1000,530);
    if(frameCount %2==0) {
        this.contador2 ++;
        if(this.contador2>125) {
            this.contador2=125;
        }
    }
    if(this.contador2 ==125){
    image(this.start1, width/2-85, 450);
    }
    /*if(this.contador2 ==125 && this.mainView.getboton1() ==true){
        image(this.start2, width/2-85, 450);
        }*/

}
    

}
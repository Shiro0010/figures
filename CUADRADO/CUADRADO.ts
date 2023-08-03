
export class Cuadrado{
    private lados: number

    constructor(lados: number){
        this.lados = lados
    }

    //GETTERS:
    
    public getLados ( ): number {
        return this.lados
    }

    //SETTERS:

    public setLados (lados: number){
        this.lados = lados
    }

    //Metodos:

    public areaCuadrado (){
        return this.lados * this.lados
    }

    public perimetroCuadrado (){
       return this.lados * 4
    }
}
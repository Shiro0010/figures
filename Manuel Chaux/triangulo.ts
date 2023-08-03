export class TrianguloRectangulo{
    private base:number
    private altura:number

    constructor(base:number, altura:number){
        this.base = base
        this.altura = altura
    }
    //setter y getters
    public setBase(base:number){
        this.base = base
    }
    public setAltura(altura:number){
        this.altura = altura
    }
    public getBase(){
        return this.base
    }
    public getAltura(){
        return this.altura
    }
    // methods
    public calcularArea (){
        let area:number = this.base * this.altura / 2
        return area
    }
    public DeterminarHipotenusa():number{
        let hipotenusa:number = (this.base**2) + (this.altura**2)
        hipotenusa = Math.sqrt(hipotenusa)
        return hipotenusa
          
    }
    public calcularPerimetrow(){
        let perimetro:number = this.DeterminarHipotenusa() + this.base + this.altura
        return perimetro
    }
    public DeterminarTipoTriangulo() {
     if (this.base == this.altura){
        let s = 1
        return s
     } else {
        let aks = 2
        return aks
     }
    }
} 
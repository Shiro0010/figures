export class rectangulo{
    private base: number
    private altura: number

    constructor(base:number, altura:number) {
        this.base = base
        this.altura = altura
    }

    //getter y setter

    public getbase(){
        return this.base;
    }
    public getaltura(){
        return this.altura;
    }
    public setbase(base: number){
        this.base = base;
    }
    public setaltura(altura: number){
        this.altura= altura;
    }

    public calcularAreaRectangulo() {
    console.log("el area del rectangulo es:")
        let c = this.base * this.altura
        return c
 
    }
    public calcularPerimetroRectangulo(){
        console.log("el perimetro del rectangulo es:")
        let ae = 2 * (this.base + this.altura)
        return ae
    }
}
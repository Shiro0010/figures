export class Circulo {
    private radio : number
    constructor ( radio: number){
        if (radio <=0){
            throw new Error ("El radio del circulo debe ser positivo")
        }
        this.radio = radio
    }
    public getRadio(): number {
        return this.radio 
    }
    public setRadio(radio: number){
        this.radio = radio
    }
    public calcularArea(): number{
        const pi : number = 3.1416
        const area: number = pi * (this.radio**2)
        return area
    }
    public calcularPerimetro(): number{
        const pi : number = 3.1416
        const perimetro = 2 * pi * this.radio
        return perimetro
    }
}
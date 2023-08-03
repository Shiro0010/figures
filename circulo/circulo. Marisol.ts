export class Circulo{
    private radio: number 
    constructor(radio: number) {
        this.radio = radio
    }
    public calcularArea(): number{
        const pi: number = 3.1416;
        const area: number = pi * (this.radio **2);
        return area;
    }
}


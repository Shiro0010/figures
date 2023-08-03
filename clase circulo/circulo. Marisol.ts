export class Circulo{
    private radio: number 
    constructor(radio: number) {
        if (radio <= 0) {
          throw new Error("El radio del círculo debe ser un número positivo.");
        }
        this.radio = radio;
      }
    public getradio(): number {
        return this.radio;
    }
    public setRadio(radio: number){
        this.radio = radio
    }
    public calcularArea(): number{
        const pi: number = 3.1416;
        const area: number = pi * (this.radio **2);
        return area;
    }
}


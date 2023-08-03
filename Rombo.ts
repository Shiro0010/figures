export class Rombo {
    private diagonal1: number;
    private diagonal2: number;
    private longitudLado: number;
  
    constructor(d1: number, d2: number, lado: number) {
      this.diagonal1 = d1;
      this.diagonal2 = d2;
      this.longitudLado = lado;
    }
    calcularArea(): number {
        return (this.diagonal1 * this.diagonal2) / 2;
      }
    
      calcularPerimetro(): number {
        return 4 * this.longitudLado;
      }
}
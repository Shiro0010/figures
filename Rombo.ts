export class Rombo {
    private diagonal1: number;
    private diagonal2: number;
    private longitudLado: number;
  
    constructor(d1: number, d2: number, lado: number) {
      this.diagonal1 = d1;
      this.diagonal2 = d2;
      this.longitudLado = lado;

    }
    public getDaiagonal1(): number{
        return this.diagonal1
    }
    public getDiagonal2(): number{
        return this.diagonal2
    }
    public getLongitudLado(): number{
        return this.longitudLado
    }
    public setDiagonal1(diagonal1: number){
        this.diagonal1 = diagonal1
    }
    public setDiagonal2(diagonal2: number){
        this.diagonal2 = diagonal2
    }
    public setLongitudLado(longitudLado: number){
        this.longitudLado = longitudLado
    }
    calcularArea(): number {
        return (this.diagonal1 * this.diagonal2) / 2;
      }
    
      calcularPerimetro(): number {
        return 4 * this.longitudLado;
      }
}
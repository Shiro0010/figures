export class Trapecio {
    baseMayor: number;
  baseMenor: number;
  altura: number;

  constructor(baseMayor: number, baseMenor: number, altura: number) {
    this.baseMayor = baseMayor;
    this.baseMenor = baseMenor;
    this.altura = altura;
  }
  public  getBaseMayor(): number{
     return this.baseMayor
  }
  public getBaseMenor(): number {
    return this.baseMenor
  }
  public getAltura(): number{
    return this.altura
  }
  public setBaseMayor(baseMayor: number){
    this.baseMayor = baseMayor
  }
  public setBaseMenor(baseMenor: number){
    this.baseMenor = this.baseMayor
  }
  public setAlter(altura: number){
    this.altura = altura
  }
    calcularArea(): number {
         return (this.baseMayor + this.baseMenor) * this.altura / 2;
  }
  calcularLadoTrapezoidal(): number {
    const ladoTrapezoidal = Math.sqrt(Math.pow((this.baseMayor - this.baseMenor) / 2, 2) + Math.pow(this.altura, 2));
    return ladoTrapezoidal;
  }

  calcularPerimetro(): number {
    const ladoTrapezoidal = this.calcularLadoTrapezoidal();
    const perimetro = this.baseMayor + this.baseMenor + 2 * ladoTrapezoidal;
    return perimetro;
  }
}
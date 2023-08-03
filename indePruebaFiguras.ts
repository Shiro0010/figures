//circulo
import { Circulo } from "./Circulo";
let radioCirculo : number = 5;
let miCirculo: Circulo = new Circulo(radioCirculo);
let areaDelCirculo: number = miCirculo.calcularArea();

 console.log("Elarea del circulo con radio", radioCirculo, " es ", areaDelCirculo)

//rectangulo
import{ Rectangulo}from './Rectangulo';

let a = new rectangulo(10,5);
console.log(a.calcularAreaRectangulo());
console.log(a.calcularPerimetroRectangulo())
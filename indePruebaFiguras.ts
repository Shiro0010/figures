//circulo
import { Circulo } from "./Circulo";
let radioCirculo : number = 5;
let miCirculo: Circulo = new Circulo(radioCirculo);
let areaDelCirculo: number = miCirculo.calcularArea();

 console.log("Elarea del circulo con radio", radioCirculo, " es ", areaDelCirculo)
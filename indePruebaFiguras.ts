//circulo
import { Circulo } from "./Circulo";
let radioCirculo : number = 5;
let miCirculo: Circulo = new Circulo(radioCirculo);
let areaDelCirculo: number = miCirculo.calcularArea();

 console.log("Elarea del circulo con radio", radioCirculo, " es ", areaDelCirculo)

//rectangulo
import{ Rectangulo }from './Rectangulo';

let a = new rectangulo(10,5);
console.log(a.calcularAreaRectangulo());
console.log(a.calcularPerimetroRectangulo())


//Cuadrado:

import { Cuadrado } from "./CUADRADO/CUADRADO";

let Cuadrado1: Cuadrado = new Cuadrado(5)

console.log("\nEl valor del lado del cuadrado es: ", Cuadrado1.getLados())

if (Cuadrado1.getLados() < 1)
    console.log("\nEs imposible realizar un area con datos inexistentes.")

else{
    console.log("\nEl area del cuadrado es: " , Cuadrado1.areaCuadrado())
    console.log("\nEl perimetro del area es: " , Cuadrado1.perimetroCuadrado())}
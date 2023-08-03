//circulo
import { Circulo } from './circulo';
let radioCirculo: number = 5;
let miCirculo: Circulo = new Circulo(radioCirculo);

let areaDelCirculo: number = miCirculo.calcularArea();
let perimetroCirculo: number = miCirculo.calcularPerimetro();

console.log("El área del círculo con radio", radioCirculo, "es", areaDelCirculo.toFixed(2));
console.log("El perímetro del círculo con radio", radioCirculo, "es", perimetroCirculo.toFixed(2));
//rectangulo

import { rectangulo }from './rectangulo/rectangulo';

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
//triangulo
import { TrianguloRectangulo } from "./Manuel Chaux/triangulo";

let rect = new TrianguloRectangulo(10, 10)
console.log("el area del triangulo es igual a: ", rect.calcularArea());
console.log("la hipotenusa del triagnulo es igual a: ", rect.DeterminarHipotenusa());
console.log("el perimetro del triagulo e igual a: ", rect.calcularPerimetrow());
if (rect.DeterminarTipoTriangulo() == 1){
    console.log("el tipo de triangulo es isoceles");
} else { 
    console.log("el tipo de triangulo es escaleno");    
}

//Rombo 
import { Rombo } from './Rombo';
const diagonal1 = 8;
const diagonal2 = 10;
const longitudLado = 5;

const rombo = new Rombo(diagonal1, diagonal2, longitudLado);
const area = rombo.calcularArea();
const perimetro = rombo.calcularPerimetro();

console.log("Área del rombo:", area);
console.log("Perímetro del rombo:", perimetro);
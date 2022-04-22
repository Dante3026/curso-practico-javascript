



// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado =  5;
console.log ("Los lados del Cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado  * 4 ;
} 

console.log ("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

    
function areacuadrado (lado){
    return lado * lado;
}

console.log ("El area del cuadrado es: " + areacuadrado+ "cm² " );

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos")
const ladoTriangulo1 =  6;

const ladoTriangulo2 =  6;


const baseTriangulo =  4;





console.log (
    "Los lados del Triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
    
    
    
    );


const alturaTriangulo =  5.5;
console.log ("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("El area del Triangulo es: " + areaTriangulo + "cm² " );





    console.groupEnd();

    //Codigo del círculos

console.group("Círculos");


//Radio
const radioCirculo = 4; 
console.log ("El radio del circulo es: " + radioCirculo + "cm");




//Diámetro

const diametroCirculo = radioCirculo * 2;

console.log ("El diámetro del circulo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;
console.log ("PI es: " + PI );



//Circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log ("El perimetro  del circulo es: " + perimetroCirculo + "cm");




//Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log ("El areaCirculo del circulo es: " + areaCirculo + "cm²");




console.groupEnd();


//Aqui interactuamos con el html


     
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areacuadrado (value);
    alert(area);

}
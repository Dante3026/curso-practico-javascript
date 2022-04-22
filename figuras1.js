function calculoAlturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {

        return Math.sqrt((lado2 * lado2) - ((base / 2) * (base / 2)));
        
        console.log(altura);
    }  else {

        return "No es un triángulo isósceles"
    }

}

function calcularAlturaTrianguloIsosceles() {
    const inputlado1 = document.getElementById("InputTrianguloIsoscelesLado1");
    const valuelado1 = Number(inputlado1.value);

    const inputlado2 = document.getElementById("InputTrianguloIsoscelesLado2");
    const valuelado2 = Number(inputlado2.value);
    
    const inputbase = document.getElementById("InputTrianguloIsoscelesBase");
    const valuebase = Number(inputbase.value);

    const alturaTriangulo = calculoAlturaTrianguloIsosceles(valuelado1, valuelado2, valuebase)
    alert(alturaTriangulo);
}
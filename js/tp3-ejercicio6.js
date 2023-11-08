function perimetroRectangulo(primerLado, segundoLAdo){
    const perimetro =  2*(primerLado+segundoLAdo);
    return perimetro;
}

const lado1 = parseInt(prompt(`Ingrese el valor del primer lado: `));
const lado2 = parseInt(prompt(`Ingrese el valor del segundo lado: `));

const respuesta = perimetroRectangulo(lado1, lado2);
document.write(`El perimetro del rectangulo es: ${respuesta}  `)
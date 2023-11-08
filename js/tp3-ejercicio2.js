let arrayCiudad = []

do{
    let ciudad = prompt("ingrese el nombre de una ciudad: ")

    
    arrayCiudad.push(ciudad)

}while(confirm('¿Desea ingresar otra ciudad mas?'));

document.write(`<h3>El arreglo de ciudades tiene ${arrayCiudad.length} elementos</3>`);

document.write(`<ul>`);
//sustituyo en segunda posicion del elemento por Barcelona
arrayCiudad[1] = "Barcelona";

//aagrego en ultima posicion la ciudade PAris
arrayCiudad.push("Paris");

document.write(`<li>Elemento 1er posición: ${arrayCiudad[0]}</li>`);
document.write(`<li>Elemento 3ra posición: ${arrayCiudad[2]}</li>`);
document.write(`<li>Elemento ultima posición: ${arrayCiudad[arrayCiudad.length - 1]}</li>`);

document.write(`<li>Elemento 2da posición: ${arrayCiudad[1]}</li>`);


document.write(`<h2>Arreglo de ciudades</2>`);
document.write(`<ul>`);
for(let i = 0; i < arrayCiudad.length;i++){
    document.write(`<li>Elemento: ${arrayCiudad[i]}</li>`);
}
document.write(`</ul>`);


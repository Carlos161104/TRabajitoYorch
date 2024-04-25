"use strict";
function imprimirSubconjuntos(arreglo) {
    function agregarASubconjuntos(subconjuntos, numero) {
        let nuevosSubconjuntos = [];
        for (let subconjunto of subconjuntos) {
            let nuevoSubconjunto = [...subconjunto, numero];
            nuevosSubconjuntos.push(nuevoSubconjunto);
        }
        return nuevosSubconjuntos;
    }
    let subconjuntos = [[]];
    for (let numero of arreglo) {
        subconjuntos = subconjuntos.concat(agregarASubconjuntos(subconjuntos, numero));
    }
    subconjuntos.forEach(subconjunto => {
        console.log(subconjunto);
    });
    console.log("-----------------------------------");
    console.log(`El numero de subconjuntos es: ${subconjuntos.length}`);
}
imprimirSubconjuntos([1, 2, 3, 4, 5, 6, 7]);

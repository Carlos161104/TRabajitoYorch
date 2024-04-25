function imprimirSubconjuntos(arreglo: number[]): void {

    function agregarASubconjuntos(subconjuntos: number[][], numero: number): number[][] {
        let nuevosSubconjuntos: number[][] = [];
        for (let subconjunto of subconjuntos) {
            let nuevoSubconjunto: number[] = [...subconjunto, numero];
            nuevosSubconjuntos.push(nuevoSubconjunto);
        }
        return nuevosSubconjuntos;
    }

    let subconjuntos: number[][] = [[]];

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
const calificaciones = [];

let finalizar = false;

do {

    const eleccion = window.prompt("Elija una opción:\n" +
        "A. Introducir una nota al principio\n" +
        "B. Introducir una nota al final\n" +
        "C. Subir todas las notas X puntos\n" +
        "D. Calcular estadísticas actuales\n" +
        "E. Vaciar notas\n" +
        "F. Inicializar N notas a valor X\n" +
        "G. Eliminar la primera nota\n" +
        "H. Eliminar la segunda nota\n" +
        "I. Establecer a 0 todos los suspensos\n" +
        "J. Sustituir una nota por otra\n" +
        "K. Añadir una nota en una posición\n" +
        "L. Contar el número de suspensos\n" +
        "M. Salir\n" +
        "Elige una opción: "
    );

    if (eleccion !== null) {
        
        switch (eleccion.toUpperCase()) {
            
            case "A":
                const valorInicio = pedirCalificacion();
                calificaciones.unshift(valorInicio);
                console.log(`La nota ${valorInicio} se ha insertado al inicio.`);
                console.table(calificaciones);
                break;

            case "B":
                const valorFinal = pedirCalificacion();
                calificaciones.push(valorFinal);
                console.log(`La nota ${valorFinal} se ha insertado al final.`);
                console.table(calificaciones);
                break;

            case "C":
                const extra = pedirAumento();
                for(let i = 0; i < calificaciones.length; i++) {
                    calificaciones[i] += extra;
                    if(calificaciones[i] > 10) {
                        calificaciones[i] = 10;
                    }
                }
                console.log(`Aumentadas todas las calificaciones en ${extra} puntos.`);
                console.table(calificaciones);
                break;

            case "D":
                if (calificaciones.length === 0) {
                    console.log("No es posible calcular estadísticas con el listado vacío.");
                } else {
                    console.log(`Máximo: ${obtenerMaximo(calificaciones)}`);
                    console.log(`Mínimo: ${obtenerMinimo(calificaciones)}`);
                    console.log(`Media: ${obtenerMedia(calificaciones)}`);
                    console.log(`Moda: ${obtenerModa(calificaciones)}`);
                }
                break;

            case "E":
                calificaciones.length = 0;
                console.log("Listado de calificaciones vaciado completamente.");
                console.table(calificaciones);
                break;

            case "F":
                const cantidad = parseInt(window.prompt("Introduce el número de notas que quieres generar:"));
                if (cantidad > 0) {
                    const notaFija = pedirCalificacion();
                    calificaciones.length = 0;
                    for(let i = 0; i < cantidad; i++) {
                        calificaciones.push(notaFija);
                    }
                    console.log(`Generadas ${cantidad} calificaciones con valor ${notaFija}.`);
                    console.table(calificaciones);
                }
                break;

            case "M":
                finalizar = true;
                console.log("¡Cerrando el sistema!");
                break;
                
            default:
                console.log("Opción no válida.");
                break;
        }
    }

} while (!finalizar);


function pedirCalificacion() {
    let valor;
    do {
        valor = parseFloat(window.prompt("Introduce la nota:"));
        if (valor < 0 || valor > 10) {
            console.log("¡Debe ser un valor válido entre 0 y 10!");
        }
    } while (valor < 0 || valor > 10);
    return valor;
}

function pedirAumento() {
    let valorExtra;
    do {
        valorExtra = parseFloat(window.prompt("Introduce los puntos a subir:"));
        if (valorExtra < 0 || valorExtra > 10) {
            console.log("¡Debe ser un valor de puntos válido entre 0 y 10!");
        }
    } while (valorExtra < 0 || valorExtra > 10);
    return valorExtra;
}

function obtenerMaximo(array) {
    let max = -Infinity;
    for(let numero of array) {
        if(numero > max) {
            max = numero;
        }
    }
    return max;
}

function obtenerMinimo(array) {
    let min = Infinity;
    for(let numero of array) {
        if(numero < min) {
            min = numero;
        }
    }
    return min;
}

function obtenerMedia(array) {
    let acumulado = 0;
    for(let numero of array) {
        acumulado += numero;
    }
    return acumulado / array.length;
}

function obtenerModa(array) {
    let modaResultante = array[0];
    let contadorMaximo = 0;
    
    for(let num1 of array) {
        let contadorActual = 0;
        for(let num2 of array) {
            if(num1 === num2) {
                contadorActual++;
            }
        }
        if(contadorActual > contadorMaximo) {
            contadorMaximo = contadorActual;
            modaResultante = num1;
        }
    }
    return modaResultante;
}
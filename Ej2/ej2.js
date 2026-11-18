const inscritos = new Set();
let salirApp = false;

do {
    const opcionElegida = window.prompt(
        "Menú de Gestión de Actividades:\n" +
        "A. Inscribir un participante\n" +
        "B. Dar de baja un participante\n" +
        "C. Comprobar inscripción\n" +
        "D. Mostrar participantes\n" +
        "E. Vaciar inscripciones\n" +
        "F. Salir\n" +
        "Elige una opción:"
    );

    if (opcionElegida !== null) {

        switch (opcionElegida.toUpperCase()) {

            case "A":
                const nombreInscripcion = window.prompt("Introduce el nombre del participante:");
                if (nombreInscripcion) {
                    if (inscritos.has(nombreInscripcion)) {
                        console.log(`El participante ${nombreInscripcion} ya estaba inscrito.`);
                    } else {
                        inscritos.add(nombreInscripcion);
                        console.log(`${nombreInscripcion} ha sido inscrito correctamente.`);
                    }
                } else {
                    console.log("No has introducido un nombre válido.");
                }
                break;

            case "B":
                const nombreBaja = window.prompt("Introduce el nombre para dar de baja:");
                if (nombreBaja) {
                    if (inscritos.delete(nombreBaja)) {
                        console.log(`${nombreBaja} ha sido dado de baja de la actividad.`);
                    } else {
                        console.log(`No se ha encontrado a ${nombreBaja} en el registro.`);
                    }
                }
                break;

            case "C":
                const nombreComprobar = window.prompt("Introduce el nombre a comprobar:");
                if (nombreComprobar) {
                    if (inscritos.has(nombreComprobar)) {
                        console.log(`${nombreComprobar} SI está inscrito en la actividad.`);
                    } else {
                        console.log(`${nombreComprobar} NO está inscrito en la actividad.`);
                    }
                }
                break;

            case "D":
                if (inscritos.size === 0) {
                    console.log("No hay ningun participante inscrito.");
                } else {
                    console.log(`Hay un total de ${inscritos.size} participantes inscritos:`);
                    for (const participante of inscritos) {
                        console.log(`- ${participante}`);
                    }
                }
                break;

            case "E":
                inscritos.clear();
                console.log("Se han eliminado los participantes que estan inscritos.");
                break;

            case "F":
                salirApp = true;
                console.log("Saliendo");
                break;
        }
    }

} while (!salirApp);
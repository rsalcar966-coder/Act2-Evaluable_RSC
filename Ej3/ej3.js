const catalogoBiblioteca = new Map();
let aplicacionActiva = true;

do {
    const seleccion = window.prompt("Menú de Gestión de Biblioteca:\n" +
        "A. Añadir un libro\n" +
        "B. Eliminar un libro\n" +
        "C. Consultar un libro\n" +
        "D. Mostrar catálogo\n" +
        "E. Modificar ejemplares\n" +
        "F. Buscar libros de un autor\n" +
        "G. Prestar un libro\n" +
        "H. Devolver un libro\n" +
        "I. Mostrar estadísticas\n" +
        "J. Vaciar catálogo\n" +
        "K. Salir\n" +
        "Elige una opción:"
    );

    if (seleccion !== null) {
        switch (seleccion.toUpperCase()) {
            
            case "A":
                const isbnNuevo = window.prompt("Introduce el ISBN del libro:");
                if (catalogoBiblioteca.has(isbnNuevo)) {
                    console.log("Error: Ese ISBN ya está registrado.");
                } else {
                    const tituloLibro = window.prompt("Introduce el título:");
                    const autorLibro = window.prompt("Introduce el autor:");
                    let numEjemplares = parseInt(window.prompt("Introduce el número de ejemplares:"));
                    
                    if (numEjemplares < 0 || isNaN(numEjemplares)) {
                        numEjemplares = 0;
                    }

                    catalogoBiblioteca.set(isbnNuevo, {
                        titulo: tituloLibro,
                        autor: autorLibro,
                        ejemplares: numEjemplares
                    });
                    console.log(`El libro "${tituloLibro}" se ha añadido al mapa.`);
                }
                break;
            
            case "B":
                const isbnBorrar = window.prompt("Introduce el ISBN del libro a eliminar:");
                if (catalogoBiblioteca.delete(isbnBorrar)) {
                    console.log("El libro ha sido eliminado del catálogo.");
                } else {
                    console.log("No se ha encontrado ningún libro con ese ISBN.");
                }
                break;

            case "C":
                const isbnConsultar = window.prompt("Introduce el ISBN a consultar:");
                if (catalogoBiblioteca.has(isbnConsultar)) {
                    const infoLibro = catalogoBiblioteca.get(isbnConsultar);
                    console.log(`Título: ${infoLibro.titulo} | Autor: ${infoLibro.autor} | Ejemplares: ${infoLibro.ejemplares}`);
                } else {
                    console.log("El libro no existe en la biblioteca.");
                }
                break;

            case "D":
                console.log(`Total de libros diferentes registrados: ${catalogoBiblioteca.size}`);
                for (let [clave, valor] of catalogoBiblioteca) {
                    console.log(`[ISBN: ${clave}] - ${valor.titulo} por ${valor.autor} (${valor.ejemplares} disponibles)`);
                }
                break;

            case "E":

                break;

            case "F":

                break;

            case "G":

                break;

            case "H":

                break;

            case "I":

                break;

            case "J":
                catalogoBiblioteca.clear();
                console.log("Catálogo vaciado.");
                break;

            case "K":
                aplicacionActiva = false;
                console.log("Saliendo de la aplicación...");
                break;
        }
    }

} while (aplicacionActiva);
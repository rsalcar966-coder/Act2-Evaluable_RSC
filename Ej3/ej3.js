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
                    console.log("Error: Ese ISBN ya está registrado");
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
                const isbnModificar = window.prompt("Introduce el ISBN a modificar:");
                if (catalogoBiblioteca.has(isbnModificar)) {
                    const nuevaCantidad = parseInt(window.prompt("Introduce la nueva cantidad de ejemplares:"));
                    if (nuevaCantidad >= 0) {
                        const libroActualizar = catalogoBiblioteca.get(isbnModificar);
                        libroActualizar.ejemplares = nuevaCantidad;
                        catalogoBiblioteca.set(isbnModificar, libroActualizar);
                        console.log("Ejemplares actualizados correctamente.");
                    }
                } else {
                    console.log("No se ha encontrado el ISBN.");
                }
                break;

            case "F":
                const autorBuscar = window.prompt("Introduce el nombre del autor:");
                let contadorLibros = 0;
                for (let [clave, valor] of catalogoBiblioteca) {
                    if (valor.autor.toLowerCase() === autorBuscar.toLowerCase()) {
                        console.log(`- ${valor.titulo} (ISBN: ${clave})`);
                        contadorLibros++;
                    }
                }
                if (contadorLibros === 0) {
                    console.log("No hay libros registrados de ese autor");
                }
                break;

            case "G":
                const isbnPrestar = window.prompt("Introduce el ISBN del libro a prestar:");
                if (catalogoBiblioteca.has(isbnPrestar)) {
                    const libroPrestar = catalogoBiblioteca.get(isbnPrestar);
                    if (libroPrestar.ejemplares > 0) {
                        libroPrestar.ejemplares--;
                        catalogoBiblioteca.set(isbnPrestar, libroPrestar);
                        console.log("Prestamo realizado con éxito.");
                    } else {
                        console.log("Operación denegada: No quedan ejemplares disponibles.");
                    }
                } else {
                    console.log("El libro no existe en el catálogo.");
                }
                break;

            case "H":
                const isbnDevolver = window.prompt("Introduce el ISBN del libro a devolver:");
                if (catalogoBiblioteca.has(isbnDevolver)) {
                    const libroDevolver = catalogoBiblioteca.get(isbnDevolver);
                    libroDevolver.ejemplares++;
                    catalogoBiblioteca.set(isbnDevolver, libroDevolver);
                    console.log("Devolución procesada correctamente.");
                } else {
                    console.log("El ISBN no pertenece a nuestra biblioteca.");
                }
                break;

            case "I":
                if (catalogoBiblioteca.size === 0) {
                    console.log("No hay estadísticas porque el catálogo esta vacio.");
                } else {
                    let sumatorioEjemplares = 0;
                    let tituloMasCopias = "";
                    let recordCopias = -1;

                    for (let [clave, valor] of catalogoBiblioteca) {
                        sumatorioEjemplares += valor.ejemplares;
                        
                        if (valor.ejemplares > recordCopias) {
                            recordCopias = valor.ejemplares;
                            tituloMasCopias = valor.titulo;
                        }
                    }
                    
                    console.log(`Total de títulos registrados: ${catalogoBiblioteca.size}`);
                    console.log(`Total de ejemplares físicos: ${sumatorioEjemplares}`);
                    console.log(`Libro con más disponibilidad: ${tituloMasCopias} (${recordCopias} copias)`);
                }
                break;

            case "J":
                catalogoBiblioteca.clear();
                console.log("Catálogo vaciado.");
                break;

            case "K":
                aplicacionActiva = false;
                console.log("Saliendo de la aplicación...");
                break;

            default:
                console.log("Opción no válida.");
                break;
        }
    }

} while (aplicacionActiva);

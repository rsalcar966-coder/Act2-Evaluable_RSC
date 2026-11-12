let notas = [];



function main() {
    let opcion;

    do {
        opcion = window.prompt(
            "A. Introducir una nota al principio\n" +
            "B. Introducir una nota al final\n" +
            "M. Salir"
        );

        switch (opcion) {
            case "A":
                let a = window.prompt("Introduce la nota:");
                notas.unshift(nota);
                break;
            case "B":
                let b = window.prompt("Introduce la nota:");
                notas.push(nota); break;
            case "C":

                break;
            case "D":

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

                break;
            case "K":

                break;
            case "L":

                break;
            case "M":
                alert("Programa finalizado.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== "M");
}

main();
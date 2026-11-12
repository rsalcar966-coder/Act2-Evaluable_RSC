let notas = [];

function introducirAlPrincipio() {
    let nota = Number(prompt("Introduce la nota:"));
    notas.unshift(nota);
}

function introducirAlFinal() {
    let nota = Number(prompt("Introduce la nota:"));
    notas.push(nota);
}

function main() {
    let opcion;

    do {
        opcion = prompt(
            "NOTAS: [" + notas.join(" ") + "]\n" +
            "A. Introducir una nota al principio\n" +
            "B. Introducir una nota al final\n" +
            "M. Salir"
        );

        switch (opcion) {
            case "A":
                introducirAlPrincipio();
                break;
            case "B":
                introducirAlFinal();
                break;
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
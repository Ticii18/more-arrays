import promptSync from "prompt-sync";
const prompt = promptSync();

let alumnos = [];


function agregarAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno: ");

    // Verificar si el alumno ya existe
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i][0].toLowerCase() === nombre.toLowerCase()) {
            console.log("El alumno ya existe.");
            return;
        }
    }

    let materias = ["Matematicas", "Lengua", "Sociales", "Naturales"];
    let notas = [];

    // Pedir notas para cada materia
    for (let i = 0; i < materias.length; i++) {
        let nota;
        while (true) {
            nota = parseInt(prompt("Ingrese la nota de " + materias[i] + " (0 a 10): "));
            if (!isNaN(nota) && nota >= 0 && nota <= 10) break;
            console.log("Por favor ingrese una nota válida entre 0 y 10.");
        }
        notas.push([materias[i], nota]);
    }

    alumnos.push([nombre, notas]);
    console.log("Alumno agregado con éxito.");
}

// Pedir cantidad de alumnos
let cantidad = parseInt(prompt("Ingrese la cantidad de alumnos a cargar: "));
console.log(" ");

for (let i = 0; i < cantidad; i++) {
    console.log("Carga los datos del alumno numero " + (i + 1) + " de " + cantidad + "");
    agregarAlumno();
}

// Mostrar todos los alumnos al final
console.log("Listado de alumnos cargados: ");
console.log(" ")
for (let i = 0; i < alumnos.length; i++) {
    let nombre = alumnos[i][0];
    let notas = alumnos[i][1];
    console.log("Alumno: " + nombre);
    
    for (let j = 0; j < notas.length; j++) { // Mostrar cada materia y su nota
        console.log("  " + notas[j][0] + ": " + notas[j][1]);
    }
}

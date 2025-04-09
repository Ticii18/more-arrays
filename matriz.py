alumnos = []

contador = int(input("Ingrese la cantidad de alumnos a cargar: "))

def agregar_alumno():
    nombre = input("Ingrese el nombre del alumno: ")

    # Verificar si el alumno ya existe
    for alumno in alumnos:
        if alumno[0].lower() == nombre.lower():
            print("El alumno ya existe.")
            return

    materias = ["Matematicas", "Lengua", "Sociales", "Naturales"]
    notas = []

    # Bucle para cargar las notas de cada materia
    for materia in materias:
        while True:
            try:
                nota = int(input(f"Ingrese la nota de {materia}: "))
                if 0 <= nota <= 10:
                    break
                else:
                    print("La nota debe estar entre 0 y 10.")
            except ValueError:
                print("Por favor ingrese un número válido.")
        notas.append([materia, nota])

    alumnos.append([nombre, notas])
    print("Alumno agregado con éxito.\n")

# Bucle principal para cargar todos los alumnos
for i in range(contador):
    print(f" Carga los datos del alumno numero {i + 1} de {contador} ")
    agregar_alumno()

# Mostrar todos los alumnos cargados
print("lista de alumnos cargados: ")
print(" ")
for alumno in alumnos:
    nombre = alumno[0]
    notas = alumno[1]
    print(f"Alumno: {nombre}")
    for materia, nota in notas:
        print(f" {materia}: {nota}")

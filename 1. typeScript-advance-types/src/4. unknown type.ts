let anyVar: any; // Le decimos que no coge tipo de absolutamente nada
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let newVariable: boolean = anyVar; // Si trabajamos con una variable any no sabremos si es el tipo que estamos necesitando

anyVar.doSomething(); // No sabemos si es un objeto
anyVar.toUpperCase(); // No sabemos si es un string

/* Trabajando con unknown */

let unknownVariable: unknown; // Funciona igual que any podemos asignarle cualquier valor con la diferencia que al momento de usar la variable nos fuerza a verificar el tipo de datos
unknownVariable = true;
unknownVariable = undefined;
unknownVariable = null;
unknownVariable = 1;
unknownVariable = [];
unknownVariable = {};

if (typeof unknownVariable === "boolean") {
  let newVariable: boolean = unknownVariable; // Primero debemos verificar el tipo unkonwn si no nos lanzaria un error
}

class DoSometing {
  constructor() {
    // Nada
  }

  public doSomething() {
    console.log("Hola mundo");
  }
}
unknownVariable = new DoSometing();

console.log(typeof unknownVariable);
if (typeof unknownVariable === "object") {
  (unknownVariable as DoSometing).doSomething(); // Esto lanzaria error porque 'unknownVariable' is of type 'unknown'
}

if (typeof unknownVariable === "string") {
  unknownVariable.toUpperCase(); // No sabemos si es un string
}

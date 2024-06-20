// Cuando tenemos una funcion que dependiendo del tipo de argumento recibido puede retornar una cosa o la otra, para esto debemos crear interfaces de la funcion con diferentes sobrecargos

// Si hacemos una definicion de recibir un any o retornar un unknown siempre deben ir al final
function parseString(input: string): string[];
function parseString(input: number): string;
function parseString(input: boolean): number[];

// Ya podemos decirle a la funcion que infiera todo como unknown y solo hacemos comparacion de tipos y hacemos el retorno pertinente, es muy util cuando dependemos de lo que reciba la funcion
function parseString(input: unknown): unknown {
  switch (typeof input) {
    case "string":
      return input.split("");
    case "number":
      return input.toString();
    case "boolean":
      return [1, 2, 3, 4, 5];
    default:
      throw Error("Undefined type");
  }
}

const tipoArray = parseString("Hola mundo"); // Infer this is un array
const tipoString = parseString(12345); // Infer this is un string
const tipo = parseString(true); // Infer this is an array of numbers
const tipoDesconocido = parseString({ carlos: 123 }); // La sobre carga no es valida
/***
 * No overload matches this call.
  Overload 1 of 3, '(input: string): string[]', gave the following error.
    Argument of type '{ carlos: number; }' is not assignable to parameter of type 'string'.
  Overload 2 of 3, '(input: number): string', gave the following error.
    Argument of type '{ carlos: number; }' is not assignable to parameter of type 'number'.
  Overload 3 of 3, '(input: boolean): number[]', gave the following error.
    Argument of type '{ carlos: number; }' is not assignable to parameter of type 'boolean'
 * 
 */

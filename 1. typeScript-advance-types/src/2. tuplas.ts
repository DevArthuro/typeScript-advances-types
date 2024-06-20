// Tipar que una tupla puede tener elementos de que tipos
const dataTupla: (string | number)[] = [];
dataTupla.push(12);
dataTupla.push(13);
dataTupla.push(14);
console.log(dataTupla);

// Tipado fuerte de una tupla y limitar los indices y tipos
const dataTuplaLimited: [string, number] = ["Carlos", 18]; // Dos elementos uno string y otro number todos dos deben estar en su pocision y tipo o daria error

// Hacer destructuring de una tupla
const [userName, age] = dataTuplaLimited;
userName; // Carlos
age; // 18
// Comunmente los podemos encontrar en algunos hooks de react que retornan un estado como tupla y se debe desestructurar

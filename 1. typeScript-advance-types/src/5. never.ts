// Cuando identificamos un valor never es que posiblemente ese dato podria dañar nuestro programa por ende debe ser controlado de alguna manera

const functionNever = () => {
  // Función never que significa que cuando esta funcion de ejecute reventara el programa
  while (true) {
    console.log("Funcion infinita");
  }
};

if (true) {
  throw Error("Adios programa");
}

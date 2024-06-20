const functionPuedenVenirOno = (p1: number, p2?: number, p3?: number) => {
  //Cuando usamos el operador ? sobre un parametro, implicitamente le estamos diciendo que puede ser undefined y no podremos controlar el flujo
  return [p1, p2, p3];
};

console.log(functionPuedenVenirOno(1)); // [ 1, undefined, undefined ]

const functionParamtrosControlados = (
  p1: number,
  p2: number = 0,
  p3: number = 0
) => {
  //Cuando usamos el operador ? sobre un parametro, implicitamente le estamos diciendo que puede ser undefined y no podremos controlar el flujo
  return [p1, p2, p3];
};

console.log(functionParamtrosControlados(1)); // [ 1, 0, 0 ]

console.log(functionParamtrosControlados(1, 2, 3)); // [ 1, 2, 3 ]

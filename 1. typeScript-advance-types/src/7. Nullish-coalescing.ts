const probandoConOpcionales = (
  name?: string,
  isNewUser?: boolean,
  roleIndex?: number
) => ({
  // Aca pensariamos que estamos validando un valor undefined
  name: name || "No aplica",
  isNewUser: isNewUser || true,
  roleIndex: roleIndex || 999,
});

console.log(probandoConOpcionales());
// { name: 'No aplica', isNewUser: true, roleIndex: 999 }

console.log(probandoConOpcionales("", false, 0));
// { name: 'No aplica', isNewUser: true, roleIndex: 999 }
/*
Para el uso de " || " los siguientes valores se concideran negativos 

"" = false 
false = false o hace la condición después de ||
0 = false 

Por lo que usar esta opcion puede ser bastante contrapruducente 
*/

// Lo mejor en este caso es usar " ?? " que solo toma con negaciones el nulo o undefined
const probandoConNullishCoalescing = (
  roleIndex: number | null,
  name?: string,
  isNewUser?: boolean
) => ({
  // Aca pensariamos que estamos validando un valor undefined
  name: name ?? "No aplica",
  isNewUser: isNewUser ?? true,
  roleIndex: roleIndex ?? 999,
});

console.log(probandoConNullishCoalescing(1));
// { name: 'No aplica', isNewUser: true, roleIndex: 999 }

console.log(probandoConNullishCoalescing(0, "", false));
// { name: '', isNewUser: false, roleIndex: 0 }

console.log(probandoConNullishCoalescing(null, "", false));
// { name: '', isNewUser: false, roleIndex: 999 }

/***
 *
 * Usar esta opcion es mucho mas segura y nos ayuda a solo validar lo que queremos
 *
 * ***/

import { ROLES } from "./3 enums";

// Sin el uso de valores implicitos y solo con un enum hicimos una función global que evalua roles
const functionWithArguments = (roleAllowed: ROLES, ...args: ROLES[]) => {
  // Los parametros rest o argumentos con variables normales que se pasan por paramtros sino que apartir de un puntos las mete dentro de un array sin aclararloo
  if (args.includes(roleAllowed)) {
    console.log("Permitido el paso");
    return true;
  }
  console.log("Denegado");
  return false;
};

const auth = functionWithArguments(ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN); // Denegado

console.log(auth); // false

const auth2 = functionWithArguments(ROLES.ADMIN, ROLES.SELLER, ROLES.ADMIN); // Permitido el paso

console.log(auth2); // true

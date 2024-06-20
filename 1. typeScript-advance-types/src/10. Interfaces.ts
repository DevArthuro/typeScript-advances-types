// Las interfaces son como contratos que pueden tener desde 1 o varios tipos declarados en su interior esto nos ayuda de por si a cumplir con ciertos tipos obligatorios y a reducir potenciales errores

import prompts from "prompts";

/**
 * Vamos a usar el siguiente modelado
 * Tendremos una transaccion
 * Tendremos usuario en este punto la transaccion debe tener un usuario asignado
 * Tendremos productos que se adquirieron
 * Tendremos una orden que tiene la transaccion y los productos entre otros atributos
 *
 * Podemos ver que si queremos accesar el usuario lo que debemos hacer es acceder a la trasacción
 *
 */

// Una buena practica es meter los tipos en modelos diferentes y tenerlos divididos
enum TypeOrder {
  FLASH = "inmediatly pay",
  LEND = "lend money",
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Transaction {
  id: number;
  webHook: string;
  cardNumber: number;
  dueDate: Date;
  cvc: number;
  user: User;
}

interface products {
  name: string;
  cantidity: number;
  price: number;
}

interface Order {
  id: number;
  type: TypeOrder;
  products: products[];
  transaction: Transaction;
}

const saveOrders: Order[] = [];

const createUser = (name: string, email: string): User => ({
  id: Math.random() * 1000,
  name,
  email,
});

const createTransaction = () => {};

const entryConsole = async (message: string) => {
  const request = await prompts({
    type: "text",
    name: "value",
    message,
  });

  return request.value;
};

const name = entryConsole("Ingresa el nombre").then((value) => {
  value;
});

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
};

const userTyped: User = {
  username: "carlos",
  role: ROLES.ADMIN,
};

console.log(userTyped);

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  nss: number;
  address: {
    street: string;
    number: number;
    state: string;
  };
  age: number;
  birthdate?: Date;
  genre?: string;
}

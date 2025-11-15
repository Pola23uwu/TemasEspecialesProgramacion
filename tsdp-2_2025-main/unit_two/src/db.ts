import { User } from "./types/user";

const users: User[] = [{
  id: '123-abc',
  firstName: 'Alice',
  lastName: 'Doe',
  nss: 85632,
  address: {
    street: 'Coahuila',
    number: 33,
    state: 'Durango'
  },
  age: 22,
}, {
  id: '987-xyz',
  firstName: 'Bob',
  lastName: 'Smith',
  nss: 66998,
  address: {
    street: 'Coahuila',
    number: 33,
    state: 'Durango'
  },
  age: 25,
}, {
  id: '678-abc',
  firstName: 'Charlie',
  lastName: 'Newton',
  nss: 97100,
  address: {
    street: 'Coahuila',
    number: 33,
    state: 'Durango'
  },
  age: 17,
},
{
  id: '999-abc',
  firstName: 'Eddy',
  lastName: 'Wong',
  nss: 99100,
  address: {
    street: 'Coahuila',
    number: 33,
    state: 'Durango'
  },
  age: 3,
}];

export default class DB {
  constructor() {}

  getByNSS(nss: number): User | undefined {
    const user = users.find((user) => user?.nss === nss);
    return user;
  }

  getAllUsers(): User[] {
    return users;
  }
}

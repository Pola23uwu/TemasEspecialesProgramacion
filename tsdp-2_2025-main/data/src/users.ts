import { randomUUID } from 'crypto';
import { faker } from '@faker-js/faker';

import db from './db/mongo';

interface User {
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const createUser = function(overwrites: Partial<User> = {}): User {
  const {
    avatar = faker.image.avatar(),
    birthday = faker.date.birthdate(),
    email = faker.internet.email().toLowerCase(),
    firstName = faker.person.firstName(),
    lastName = faker.person.lastName(),
    password = randomUUID(),  // Just for test purposes
  } = overwrites;

  return {
    avatar,
    birthday,
    email,
    firstName,
    lastName,
    password,
  }
}

async function init() {
  const users: User[] = Array
    .from({ length: 50 }, () => createUser());

  await db.collection('users').insertMany(users);

  // const user = createUser({ password: '1234' });
  // await db.collection('users).insertOne(user);
}

Promise
  .resolve(init())
  .then(() => {
    console.log('Users created successfully');
  }).catch(err => {
    console.error(err);
  });


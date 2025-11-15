import { User } from "./types/user";
import DB from "./db";

class UserRepository {
  db: DB;
  // Dependency injection
  constructor (db: DB) {
    this.db = db;
  }

  getUserByNSS(nss: number): User | undefined {
    const user = this.db.getByNSS(nss);

    return user;
  }

  getAll(): User[] {
    const users = this.db.getAllUsers();
    return users;
  }

  // Nuevo método: Obtener usuarios mayores de 17 años
  getAdultUsers(): User[] {
    const users = this.db.getAllUsers();
    // Filtramos donde la edad sea estrictamente mayor a 17.
    return users.filter(user => user.age > 17);
  }

  // Nuevo método: Obtener usuarios menores de 18 años
  getMinorUsers(): User[] {
    const users = this.db.getAllUsers();
    // Filtramos donde la edad sea estrictamente menor a 18.
    return users.filter(user => user.age < 18);
  }
}

export default UserRepository;
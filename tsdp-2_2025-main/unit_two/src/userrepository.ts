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


  getAdultUsers(): User[] {
    const users = this.db.getAllUsers();
    return users.filter(user => user.age > 17);
  }

  
  getMinorUsers(): User[] {
    const users = this.db.getAllUsers();
    return users.filter(user => user.age < 18);
  }
}

export default UserRepository;
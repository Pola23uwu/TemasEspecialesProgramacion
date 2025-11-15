import UserRepository from "./userrepository";

export class UserService {
  repo: UserRepository;
  
  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  getFullNames(): string[] {
    const users = this.repo.getAll();
    const names = [];

    for (const user of users) {
      names.push(`${user.firstName} ${user.lastName}`);
    }

    return names;
  }

  // método 1: obtener mayores de edad
  // método 2: obtener menores de edad
}


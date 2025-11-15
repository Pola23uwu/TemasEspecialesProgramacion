import DB from "./db";
import { User } from "./types/user";
import UserRepository from "./userrepository";
import { UserService } from "./userservice";

describe('User Service', () => {
  it('should return an array of fullnames', () => {
    const mockDB = new DB();
    const userRepoMock = new UserRepository(mockDB);

    const getAllSpy = jest.spyOn(userRepoMock, 'getAll').mockImplementation(() => {
      return [{
        firstName: 'John',
        lastName: 'Doe'
      }, {
        firstName: 'Alice',
        lastName: 'Smith'
      }] as unknown as User[]
    });

    const userService = new UserService(userRepoMock);
    const names: string[] = userService.getFullNames();
    
    expect(userService.getFullNames).toBeDefined();
    expect(names).toBeDefined();
    expect(names).toHaveLength(2);

    expect(names[0]).toBe('John Doe');
    expect(names[1]).toBe('Alice Smith');

    expect(getAllSpy).toHaveBeenCalledTimes(1);
  });
});
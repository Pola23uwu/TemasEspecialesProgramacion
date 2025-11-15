import DB from './db';
import { User } from './types/user';
import UserRepository from './userrepository';


describe('User respository', () => {


  it('should be defined', () => {
    const mockDB = new DB();
    const userRepository = new UserRepository(mockDB);

    expect(userRepository).toBeDefined();
  });

  it('should return an user by nss', () => {
    const mockDB = new DB();

    const getUserByNSSSpy = jest.spyOn(mockDB, 'getByNSS').mockImplementation(() => {
      return {
        id: 'abc-123'
      } as unknown as User;
    });

    const nss = 789456;
    const userRepository = new UserRepository(mockDB);

    const user = userRepository.getUserByNSS(nss);

    expect(userRepository.getUserByNSS).toBeDefined();
    expect(user).toBeDefined();
    expect(user).toHaveProperty('id', 'abc-123');
    expect(getUserByNSSSpy).toHaveBeenCalledTimes(1);
  });

  it('should return undefined if the user is not found', () => {
    const mockDB = new DB();

    const getUserByNSSSpy = jest.spyOn(mockDB, 'getByNSS').mockImplementation(() => {
      return undefined;
    });

    const userRepository = new UserRepository(mockDB);
    const user = userRepository.getUserByNSS(85632);

    expect(user).toBeUndefined();
    expect(getUserByNSSSpy).toHaveBeenCalledTimes(1);
  });

  it('should return all users', () => {
    const mockDB = new DB();

    const getAllUsersSpy = jest.spyOn(mockDB, 'getAllUsers').mockImplementation(() => {
      return [
        {
          id: '123-abc'
        },
        {
          id: '789-xyz'
        }
      ] as unknown as User[];
    });

    const userRepository = new UserRepository(mockDB);
    const users = userRepository.getAll();

    expect(users).toBeDefined();
    expect(users).toHaveLength(2);
    expect(getAllUsersSpy).toHaveBeenCalledTimes(1);
  });
  const mockUsers: User[] = [
    { id: 'a', age: 25 } as User, // Adulto
    { id: 'b', age: 17 } as User, // Menor (o límite)
    { id: 'c', age: 30 } as User, // Adulto
    { id: 'd', age: 10 } as User, // Menor
  ];

  it('should return users older than 17 (Adults)', () => {
    const mockDB = new DB();

    // Simulamos que getAllUsers devuelve nuestro array de prueba
    const getAllUsersSpy = jest.spyOn(mockDB, 'getAllUsers').mockImplementation(() => {
      return mockUsers;
    });

    const userRepository = new UserRepository(mockDB);
    const adultUsers = userRepository.getAdultUsers(); // Esperamos 25, 30

    expect(adultUsers).toBeDefined();
    expect(adultUsers).toHaveLength(2);
    expect(adultUsers.some(u => u.age === 25)).toBeTruthy();
    expect(adultUsers.some(u => u.age === 30)).toBeTruthy();
    expect(getAllUsersSpy).toHaveBeenCalledTimes(1);
  });

  it('should return users younger than 18 (Minors)', () => {
    const mockDB = new DB();

    // Simulamos que getAllUsers devuelve nuestro array de prueba
    const getAllUsersSpy = jest.spyOn(mockDB, 'getAllUsers').mockImplementation(() => {
      return mockUsers;
    });

    const userRepository = new UserRepository(mockDB);
    const minorUsers = userRepository.getMinorUsers(); // Esperamos 17, 10

    expect(minorUsers).toBeDefined();
    expect(minorUsers).toHaveLength(2);
    expect(minorUsers.some(u => u.age === 17)).toBeTruthy();
    expect(minorUsers.some(u => u.age === 10)).toBeTruthy();
    expect(getAllUsersSpy).toHaveBeenCalledTimes(1);
  });
});
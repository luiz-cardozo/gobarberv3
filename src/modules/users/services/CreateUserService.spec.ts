import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCachProvider';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUsers: CreateUserService;
let fakeCacheProvider: FakeCacheProvider;

describe('Users', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();

    createUsers = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
  });
  it('should be able to create a new user', async () => {
    // fakeUsersRepository = new FakeUsersRepository();
    // fakeHashProvider = new FakeHashProvider();
    // createUsers = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    const user = await createUsers.execute({
      name: 'Teste da Silva',
      email: 'test@test.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Teste da Silva');
    expect(user.email).toBe('test@test.com');
  });

  it('should not be able to create a user with an duplicate email', async () => {
    // const fakeUsersRepository = new FakeUsersRepository();
    // const fakeHashProvider = new FakeHashProvider();
    // const createUsers = new CreateUserService(
    //   fakeUsersRepository,
    //   fakeHashProvider,
    // );

    await createUsers.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      createUsers.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

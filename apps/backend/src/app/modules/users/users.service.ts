import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../dto/UserDTO';
import { users } from '../../../assets/users';

@Injectable()
export class UsersService {

  private readonly users: UserDTO[];

  constructor() {
    this.users = users;
  }

  async findAll(): Promise<UserDTO[] | undefined> {
    return this.users;
  }

  async createUser(payload: UserDTO): Promise<UserDTO | undefined> {
    const existedUser = this.users.find(user => user.username === payload.username)
    if (!existedUser) {
      payload.id = (Number(this.users[this.users.length - 1].id) + 1).toString()
      payload.avatar = '/images/anonymous.png'
      this.users.push(payload);
      return payload;
    } else {
      throw new Error('User is already existed.')
    }
  }

  async deleteUser(id: string): Promise<any> {
    const deletedIndex = this.users.findIndex(user => user.id === id);
    this.users.splice(deletedIndex, 1);
    return { message: 'OK' }
  }

  async findOne(username: string): Promise<UserDTO | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findOneById(userId: string): Promise<UserDTO | undefined> {
    return this.users.find(user => user.id === userId);
  }
}

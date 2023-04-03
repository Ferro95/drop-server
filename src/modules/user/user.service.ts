import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import { UserInput } from './dto/user-input.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    return res && res.raw.affectedRows > 0;
  }

  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);
    console.log(res);
    return false;
  }

  async find(id: string) {
    const res = await this.UserRepository.findOneBy({ id });
    console.log('find:', res);
    return res;
  }

  async update(id: string, params: UserInput) {
    return await this.UserRepository.update(id, params);
  }
}

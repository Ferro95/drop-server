import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async createItem() {
    return await this.userService.create({
      name: 'superAdmin',
      desc: '超管',
      tel: '12345678900',
      password: '123456',
      account: 'admin',
    });
  }

  @Delete('/del/:id')
  async deleteItem(@Param('id') id: string) {
    return await this.userService.del(id);
  }
}

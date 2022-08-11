import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return `유저를 생성했습니다. 이름: ${name}, 이메일: ${email}`;
  }

  findAll(getUsersDto: GetUsersDto) {
    const { offset, limit } = getUsersDto;
    return `This action returns all users (offset: ${offset}, limit: ${limit})`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

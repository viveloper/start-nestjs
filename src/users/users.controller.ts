import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from './dto/user-info.dto';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() dto: CreateUserDto) {
    console.log(dto);
    return;
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto) {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto) {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}

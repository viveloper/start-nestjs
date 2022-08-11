import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [ApiController, AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}

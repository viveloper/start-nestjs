import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  // @Get('ab*')
  findAll(@Req() request: Request): string {
    console.log(request.method);
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  // @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Req() request: Request): string {
    console.log(request.method);
    return 'This action adds a new cat';
  }

  @Get('docs')
  @Redirect('https://nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}

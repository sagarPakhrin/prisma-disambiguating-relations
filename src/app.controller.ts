import { Controller, Get } from '@nestjs/common';
import { Product } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Product[]> {
    return this.appService.getHello();
  }
}

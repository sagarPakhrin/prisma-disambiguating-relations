import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from './shared/services/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  async getHello(): Promise<Product[]> {
    // nested relations not working
    await this.prisma.product.create({
      data: {
        name: 'product1',
        default_fee: {
          create: {
            total: 100,
          },
        },
      },
    });

    return this.prisma.product.findMany({
      include: {
        default_fee: true,
      },
    });
  }
}

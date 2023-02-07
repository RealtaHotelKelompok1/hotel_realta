/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalModule } from './module/global.module';
import { PaymentModule } from './module/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.HOST),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: ['dist/entities/**/*{.ts,.js}'],
      // autoLoadEntities: true,
      synchronize: false,
    }),
    GlobalModule,
    PaymentModule,
  ],
})
export class MainModule {}

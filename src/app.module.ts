import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import * as dotenv from 'dotenv';
import { Category } from './entities/category.entity';
import { BlogModule } from './blog/blog.module';
import { blog } from './entities/blog.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { user } from './entities/user.entity';
dotenv.config()
@Module({
  imports: [TypeOrmModule.forRoot({
     type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3308', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8mb4',
      entities: [Category, blog, user],
      synchronize: true,
      autoLoadEntities: true,
  }), CategoryModule, BlogModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

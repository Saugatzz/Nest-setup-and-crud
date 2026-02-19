import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { blog } from 'src/entities/blog.entity';
import { Category } from 'src/entities/category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([blog, Category]),],
  
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}

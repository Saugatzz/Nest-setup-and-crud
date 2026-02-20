import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlogDto } from 'src/blog/dto/create-blog.dto';
import { blog } from 'src/entities/blog.entity';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
     constructor(
    @InjectRepository(blog) private blogRepo: Repository<blog>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}
async createBlog(frontendData: CreateBlogDto) {
    try {
      const category = await this.categoryRepo.findOne({
        where: { id: frontendData.categoryId },
      });

      if (!category) {
        return 'Category not found';
      }

      const createdBlog = this.blogRepo.create({
        name: frontendData.name,
        description: frontendData.description,
        author: frontendData.author,
        category: category,
      });

      return await this.blogRepo.save(createdBlog);
    } catch (error) {
      console.log(error);
    }
  }




 async deleteBlog(id: string) {
  const blog = await this.blogRepo.findOneBy({ id: +id });

  if (!blog) {
    throw new NotFoundException(`Blog with id ${id} not found`);
  }

  await this.blogRepo.remove(blog);
  return{
        message: 'blog deleted successfully',
    };
   
 }




  async updateBlog(id: string, updateData: any) {

  const blog = await this.blogRepo.findOne({
    where: { id: +id },
    relations: ['category'], 
  });

  if (!blog) {
    throw new NotFoundException('Blog not found');
  }
  if (updateData.categoryId) {

    const category = await this.categoryRepo.findOneBy({
      id: +updateData.categoryId
    });

    if (!category) {
      throw new NotFoundException('Category does not exist');
    }

    blog.category = category; 
  }
  blog.name = updateData.name ?? blog.name;
  blog.description = updateData.description ?? blog.description;
  blog.author = updateData.author ?? blog.author;

  const updatedBlog = await this.blogRepo.save(blog);

  return {
    message: 'Blog updated successfully',
    data: updatedBlog,
  };
}





    async getBlogById(id: number){
    const blog = await this.blogRepo.findOne({ where: { id } });

    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }

    return blog;
  }
}

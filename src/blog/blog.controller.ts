import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from 'src/blog/dto/create-blog.dto';
import { UpdateBlogDto } from 'src/blog/dto/updateBlog.dto';

@Controller('blog')
export class BlogController {
constructor(private readonly blogService:BlogService){}
  @Post('create')

    createBlog(@Body() frontendData:CreateBlogDto ){
        return this.blogService.createBlog(frontendData)
    }
     @Delete(":id")
        deleteBlog(@Param('id') id:string){
            console.log(id)
            return this.blogService.deleteBlog(id);
        }
     @Patch(":id")
            updateCategory(@Param('id')
        id:string,
            @Body() updateData: UpdateBlogDto
        ){
            console.log(id)
            return this.blogService.updateBlog(id, updateData);
        }




         @Get(':id')
          async getBlogById(
            @Param('id', ParseIntPipe) id: number,
          ){
            return this.blogService.getBlogById(id);
          }
}

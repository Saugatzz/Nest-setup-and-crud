import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from 'src/auth/dto/updateCategory.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){}
    @Post('create')
    createCategory(@Body() frontendData: CategoryService){
        return this.categoryService.createCategory(frontendData)
    }
    @Get('getAll')
    getCategory(){
        return this.categoryService.getCategory()
    }
    @Delete(":id")
    deleteCategory(@Param('id') id:string){
        console.log(id)
        return this.categoryService.deleteCategory(id);
    }

    @Patch(":id")
        updateCategory(@Param('id')
    id:string,
        @Body() updateData: UpdateCategoryDto
    ){
        console.log(id)
        return this.categoryService.updateCategory(id, updateData);
    }


    
        @Get(':id')
  async getCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ){
    return this.categoryService.getCategoryById(id);
  }
    



}

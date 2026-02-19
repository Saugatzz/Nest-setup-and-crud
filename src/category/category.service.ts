import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
     constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}
   async deleteCategory(id:string){
    const category:any = await this.categoryRepo.findOneBy({id:+id});
    if(!category){
        console.log('ID not found');
    }
    await this.categoryRepo.remove(category);
    console.log('category deleted successfully');
   }






   async updateCategory(id:string, updateData:any){
    const category = await this.categoryRepo.findOneBy({id:+id});
    if(!category){
        return console.log('Category not found');
    }
    category.name = updateData.name;
    category.slug = updateData.slug;
    category.hasParent = updateData.hasParent;
    category.parentName = updateData.parentName;
    category.displayOrder = updateData.displayOrder;

    const updatedCategory = await this.categoryRepo.save(category);
    return{
        message: 'category updated successfully',
        data : updatedCategory,
    };
   }



   
   async getCategory(){
    return this.categoryRepo.find();
   }





     async createCategory(frontendData) {
    try {
      const existingCategory = await this.categoryRepo.findOne({
        where: { name: frontendData.name },
      });

      if (existingCategory) {
        throw new BadRequestException(
          `Category "${frontendData.name}" already exists`,
        );
      }

      const createdCategory = this.categoryRepo.create({ ...frontendData });
      return await this.categoryRepo.save(createdCategory);
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }





   async getCategoryById(id: number){
    const category = await this.categoryRepo.findOne({ where: { id } });

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return category;
  }
}

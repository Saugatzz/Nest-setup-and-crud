import { Type } from 'class-transformer';
import { IsString, IsBoolean, IsOptional, IsInt, IsNumber } from 'class-validator';

export class CreateBlogDto {

  @IsString()
  name: string;



  @IsString()
  description: string;
  @IsString()
  author: string;
    @IsNumber()
  @Type(() => Number) // important for validation
  categoryId: number;
  

  @IsInt()
  displayOrder?: number;
}
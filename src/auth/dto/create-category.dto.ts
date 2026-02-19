import { IsString, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class CreateCategoryDto {

  @IsString()
  name: string;

  @IsBoolean()
  hasParent: boolean;

  @IsString()
  slug: string;
  @IsString()
  parentName: string;

@IsOptional()
  @IsInt()
  parentId?: number;

  @IsInt()
  displayOrder?: number;
}
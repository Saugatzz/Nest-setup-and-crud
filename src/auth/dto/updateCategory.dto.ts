import { IsBoolean, IsOptional, IsString, IsInt } from "class-validator";

export class UpdateCategoryDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBoolean()
  hasParent?: boolean;

  @IsOptional()
  @IsString()
  slug?: string;
  @IsString()
  parentName: string;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsInt()
  displayOrder?: number;
}

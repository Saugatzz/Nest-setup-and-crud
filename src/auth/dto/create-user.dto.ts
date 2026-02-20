import { Type } from 'class-transformer';
import { IsString, IsBoolean, IsOptional, IsInt, IsNumber } from 'class-validator';

export class SignupDto {

  @IsString()
  userName: string;



  @IsString()
  email: string;
  @IsString()
  password: string;
   
  


}
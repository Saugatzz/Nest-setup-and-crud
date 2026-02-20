import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/create-user.dto';
import bcrypt from "bcrypt"
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
 constructor(
    @InjectRepository(user) private userRepo: Repository<user>,
  ) {}
     async signup(dto: SignupDto) {
    if (!dto.password) {
      throw new BadRequestException('Password is required');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
  
    const user = this.userRepo.create({
      ...dto,
      password: hashedPassword,
    });
    const data = this.userRepo.save(user);

    return{
        success: true,
        message : "User created successfully",
        data : {
            id: user.id, 
            name: user.userName,
            email : user.email
        }

    };
  }


}

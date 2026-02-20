import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([user]),
    JwtModule.register({
        secret: 'TECHNOSHIP',
        signOptions: { expiresIn: '30d' },
      }),],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
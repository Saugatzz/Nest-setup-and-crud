import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
   getabc(): string {
    return 'Hello abc!';
  }
}

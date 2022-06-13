import { 
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
 } from '@nestjs/common';
//  import { UserService } from './user.service';
import { UserRepository } from './user.repository';
 import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<User> {
    return this.userRepository.createUser(userData);
  }

  @Get()
  async users(): Promise<User[]> {
    return this.userRepository.users();
  }
}

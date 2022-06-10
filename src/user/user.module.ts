import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UserController,],
  providers: [UserRepository, PrismaService]
})
export class UserModule {}

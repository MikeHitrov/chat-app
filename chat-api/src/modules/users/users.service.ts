import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findOneBy(username: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOneBy({ username });
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      ...createUserDto,
      createdAt: new Date(),
    });
  }
}

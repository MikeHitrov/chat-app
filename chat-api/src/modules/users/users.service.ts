import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';
import { CreateUserDto } from 'src/dto/user/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneBy(username: string): Promise<User | undefined> {
    return await this.userRepository.findOneBy({ username });
  }

  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      ...userData,
      password: hashedPassword,
      createdAt: new Date(),
    };

    return this.userRepository.save(newUser);
  }
}

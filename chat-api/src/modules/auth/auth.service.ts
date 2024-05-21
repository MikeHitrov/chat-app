import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/user/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, password) {
    try {
      const user = await this.usersService.findOneBy(username);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new UnauthorizedException();
      }

      const payload = { id: user.id, username: user.username };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new Error(`Unable to login user.\n Error:${error}`);
    }
  }

  async signUp(userData: CreateUserDto) {
    try {
      const user = await this.usersService.create(userData);

      const payload = { id: user.id, username: user.username };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new Error(`Unable to create user.\n Error:${error}`);
    }
  }
}

import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/modules/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '../../config/config.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: configService.getValue('JWT_SECRET'),
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
  ],
  exports: [AuthService],
})
export class AuthModule {}

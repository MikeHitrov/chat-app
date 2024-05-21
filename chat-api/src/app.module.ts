import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatController } from './modules/chat/chat.controller';
import { ChatService } from './modules/chat/chat.service';
import { ChatModule } from './modules/chat/chat.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { MessagesService } from './modules/messages/messages.service';
import { MessagesModule } from './modules/messages/messages.module';
import { Message } from './modules/entities/message.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Message]),
    ChatModule,
    AuthModule,
    UsersModule,
    MessagesModule,
  ],
  controllers: [ChatController, AuthController],
  providers: [ChatService, AuthService, UsersService, MessagesService],
})
export class AppModule {}

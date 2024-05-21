import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../guards/auth.guard';
import { Message } from '../entities/message.entity';
import { MessagesModule } from '../messages/messages.module';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
  imports: [MessagesModule, TypeOrmModule.forFeature([Message])],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    ChatService,
  ],
  controllers: [ChatController],
  exports: [ChatService],
})
export class ChatModule {}

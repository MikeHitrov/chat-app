import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessagesModule } from '../messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { ChatController } from './chat.controller';

@Module({
  imports: [MessagesModule, TypeOrmModule.forFeature([Message])],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}

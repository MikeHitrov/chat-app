import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { Message } from '../entities/message.entity';

@Module({
  providers: [MessagesService],
  exports: [MessagesService],
  imports: [TypeOrmModule.forFeature([Message])],
})
export class MessagesModule {}

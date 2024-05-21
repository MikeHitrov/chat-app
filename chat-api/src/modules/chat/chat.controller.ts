import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Message } from '../entities/message.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('sendMessage')
  async sendMessage(@Body() body: any): Promise<string> {
    await this.chatService.saveMessage(body.content, body.userID, 'user');

    const botResponse = await this.chatService.getBotResponse(body.content);

    await this.chatService.saveMessage(botResponse, body.userID, 'bot');

    return botResponse;
  }

  @Get('getMessages/:userID')
  async findByUser(@Param('userID') userID: number): Promise<Message[]> {
    return this.chatService.listMessagesByUserId(userID);
  }
}

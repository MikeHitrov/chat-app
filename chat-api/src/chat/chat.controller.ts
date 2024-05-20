// chat.controller.ts

import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat') // Base path for all routes in this controller
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('sendMessage') // POST endpoint to send a message
  async sendMessage(@Body() body: any): Promise<string> {
    return this.chatService.getBotResponse(body.message);
  }
}

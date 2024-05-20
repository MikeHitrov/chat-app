import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('sendMessage') // POST endpoint to send a message
  async sendMessage(@Body() body: any): Promise<string> {
    return this.chatService.getBotResponse(body.message);
  }
}

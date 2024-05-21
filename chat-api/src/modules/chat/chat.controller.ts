import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Message } from '../entities/message.entity';
import { ChatService } from './chat.service';
import { BotMessage } from 'src/dto/message/bot-message.dto';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('sendMessage')
  @ApiOperation({ summary: 'Send message to bot' })
  @ApiResponse({
    status: 200,
    description: 'Records created and answer returned',
    type: [BotMessage],
  })
  async sendMessage(@Body() body: any): Promise<string> {
    try {
      await this.chatService.saveMessage(body.content, body.userID, 'user');

      const botResponse = await this.chatService.getBotResponse(body.content);

      await this.chatService.saveMessage(botResponse, body.userID, 'bot');

      return botResponse;
    } catch (error) {
      throw new Error(
        `Unable to recieve bot message and save messages to database.\n Error:${error}`,
      );
    }
  }

  @ApiOperation({ summary: 'List user messages' })
  @ApiResponse({
    status: 200,
    description: 'Records found',
    type: [Message],
  })
  @Get('getMessages/:userID')
  async findByUser(@Param('userID') userID: number): Promise<Message[]> {
    try {
      return this.chatService.listMessagesByUserId(userID);
    } catch (error) {
      throw new Error(`Unable to list user caht history.\n Error:${error}`);
    }
  }
}

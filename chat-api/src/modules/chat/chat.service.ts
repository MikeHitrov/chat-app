import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { configService } from '../../config/config.service';
import { MessagesService } from '../messages/messages.service';
import { Message } from '../entities/message.entity';

const openai = new OpenAI({
  apiKey: configService.getValue('OPENAI_API_KEY'),
  project: configService.getValue('OPENAI_PROJECT_ID'),
});

@Injectable()
export class ChatService {
  constructor(private messagesService: MessagesService) {}

  async getBotResponse(message: string): Promise<string> {
    try {
      const botResponse = await openai.chat.completions.create({
        messages: [{ role: 'system', content: message }],
        model: 'gpt-3.5-turbo',
      });

      return botResponse.choices[0].message.content;
    } catch (error) {
      throw new Error('No response form OpenAI!');
    }
  }

  async saveMessage(
    content: string,
    userID: number,
    sender: string,
  ): Promise<void> {
    this.messagesService.saveMessage({ content, userID, sender });
  }

  async listMessagesByUserId(userID: number): Promise<Message[]> {
    return await this.messagesService.findAllByUser(userID);
  }
}

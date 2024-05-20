import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

const openai = new OpenAI();

@Injectable()
export class ChatService {
  async getBotResponse(message: string): Promise<string> {
    try{
      const botResponse = await openai.chat.completions.create({
        messages: [{ role: "system", content: message }],
        model: "gpt-3.5-turbo",
      });

      return botResponse.choices[0].message.content;
    } catch(error){
      throw new Error('No response form OpenAI')
    }
  }
}

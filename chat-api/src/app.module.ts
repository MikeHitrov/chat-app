// app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatController } from './chat/chat.controller'; // Import the ChatController
import { ChatService } from './chat/chat.service'; // Import the ChatService
import { ChatModule } from './chat/chat.module';

ConfigModule.forRoot();
@Module({
  imports: [ChatModule], // Import any modules your application requires
  controllers: [ChatController], // Add the ChatController to the controllers array
  providers: [ChatService], // Add any services your application requires
})
export class AppModule {}

import { ApiProperty } from '@nestjs/swagger';

export class BotMessage {
  @ApiProperty()
  content?: string;
}

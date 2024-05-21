import { ApiProperty } from '@nestjs/swagger';
export class BaseUser {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password: string;
}

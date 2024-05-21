import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { CreateMessageDto } from '../../dto/message/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async saveMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageRepository.save(createMessageDto);
  }

  async findAllByUser(userID: number): Promise<Message[]> {
    return this.messageRepository.find({ where: { userID } });
  }
}

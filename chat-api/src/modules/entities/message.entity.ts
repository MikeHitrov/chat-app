import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;
}

import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectId as ObjectID } from 'mongodb';

@Entity('questions')
export class Question {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  subject_id: ObjectID;

  @Column()
  resource_id: ObjectID;

  @Column()
  chapter_id: ObjectID;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

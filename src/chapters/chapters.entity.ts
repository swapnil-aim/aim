import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectId as ObjectID } from 'mongodb';

@Entity('chapters')
export class Chapter {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  subject_id: ObjectID;

  @Column()
  resource_id: ObjectID;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

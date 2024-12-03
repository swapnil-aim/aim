import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectId as ObjectID } from 'mongodb';

@Entity('resources')
export class Resource {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  subject_id: ObjectID;

  @Column()
  instructor: string;

  @Column()
  course: string;

  @Column()
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

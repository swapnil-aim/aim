import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('technologies')
export class Technology {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  resource: string;

  @Column()
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

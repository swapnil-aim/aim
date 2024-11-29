import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Technology {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
}

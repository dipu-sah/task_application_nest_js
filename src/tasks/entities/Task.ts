import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';

export interface iTask {
  title: string;
  userId: ObjectId;
}
@Schema({ collection: 'tasks', timestamps: true })
export class Task implements iTask {
  @Prop({
    required: true,
  })
  title: string;
  @Prop({
    required: true,
    ref: 'User',
    name: 'user_id',
    immutable: true,
    type: MongooseSchema.Types.ObjectId,
  })
  userId: ObjectId;
}
export type TaskDocument = Task & Document;
export const TaskSchema = SchemaFactory.createForClass(Task);
